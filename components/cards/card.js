import topics from '../topics.js';

function createCard(topic, word, number, audio, img) {
    const newCard = document.createElement('div');
    const cardsContainer = document.querySelector('.cards');
    const wordLabel = word.includes('_') ? word.split('_').join(' ') : word;
    const audioSrc = audio ? audio : `assets/cards/${topic}/audio/${word}.mp3`;

    const cardTemplate = `
          <p id="label-${number}" class="cards__label">${wordLabel}</p>
          <input class="cards__input" id="input-${number}" type="text" placeholder="перевод">
          <button id="btn-${number}" class="cards__btn cards__btn_submit">submit</button>
          <button class="cards__sound-btn">
            🔊<audio src="${audioSrc}"></audio>
          </button>
          <p id="back-label-${number}" class="cards__back-label"></p>`;

    newCard.classList.add('cards__item');
    newCard.id = `$card-${number}`;
    newCard.innerHTML = cardTemplate;

    setupCard(newCard, topic, word, number, img);
    return cardsContainer.append(newCard);
}

function setupCard(card, topic, word, number, img) {
    const submitBtn = card.querySelector('.cards__btn_submit');
    const audioBtn = card.querySelector('.cards__sound-btn');
    const input = card.querySelector('input');
    const label = card.querySelector('.cards__label');
    const backLabel = card.querySelector('.cards__back-label');

    audioBtn.addEventListener('click', () => card.querySelector('audio').play());
    card.addEventListener('click', () => input.focus());
    submitBtn.addEventListener('click', () => {
        const yesSound = document.getElementById('yes-sound');
        const noSound = document.getElementById('no-sound');
        const answer = input.value.toLowerCase().replace(/ё/, 'е');
        const translation = topics[topic][number].translation;
        const imgSrc = img ? img : `url(./assets/cards/${topic}/img/${word}.jpg)`;

        if(answer === translation){
            yesSound.play()
            card.style.animation = 'flipCard 900ms forwards';
            input.style.opacity = '0';
            submitBtn.style.opacity = '0';
            label.textContent = ' ';
            card.style.backgroundImage = imgSrc;
            setTimeout(()=>{ backLabel.style.display = 'block' }, 600)
        } else {
            noSound.play()
            card.style.animation = 'shakeCard 500ms'
            setTimeout(() => card.style.animation = 'none', 900)
        }
    });
}


function showCards(topic) {
    topics[topic].forEach((item, index) => createCard(topic, item.word, index, item.audio, item.img));
}

export { showCards };

