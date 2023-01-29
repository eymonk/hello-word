import topics from '../topics.js';

function createCard(topic, word, number) {
    const cardsContainer = document.querySelector('.cards');
    const newCard = document.createElement('div');
    const cardTemplate = `
          <p id="label-${number}" class="cards__label">${word}</p>
          <input id="input-${number}" type="text" placeholder="перевод">
          <button id="btn-${number}" class="cards__btn cards__btn_submit">submit</button>
          <button class="cards__sound-btn">
            🔊<audio src="assets/cards/${topic}/audio/${word}.mp3"></audio>
          </button>
          <p id="back-label-${number}" class="cards__back-label"></p>`;

    newCard.classList.add('cards__item');
    newCard.id = `$card-${number}`;
    newCard.innerHTML = cardTemplate;

    const submitBtn = newCard.querySelector('.cards__btn_submit');
    const audioBtn = newCard.querySelector('.cards__sound-btn');
    const input = newCard.querySelector('input');
    const label = newCard.querySelector('.cards__label');
    const backLabel = newCard.querySelector('.cards__back-label');

    audioBtn.addEventListener('click', () => newCard.querySelector('audio').play());
    newCard.addEventListener('click', () => input.focus());
    submitBtn.addEventListener('click', () => {
        const yesSound = document.getElementById('yes-sound');
        const noSound = document.getElementById('no-sound');
        const answer = input.value.toLowerCase().replace(/ё/, 'е');
        const translation = topics[topic][number].translation;

        if(answer === translation){
            yesSound.play()
            newCard.style.animation = 'flipCard 900ms forwards';
            input.style.opacity = '0';
            submitBtn.style.opacity = '0';
            label.textContent = ' ';
            newCard.style.backgroundImage = `url(./assets/cards/${topic}/img/${word}.jpg)`;
            setTimeout(()=>{ backLabel.style.display = 'block' }, 600)
        } else {
            noSound.play()
            newCard.style.animation = 'shakeCard 500ms'
            setTimeout(() => newCard.style.animation = 'none', 900)
        }
    });

    return cardsContainer.append(newCard);
}


function showCards(topic) {
    topics[topic].forEach((item,index) => createCard(topic, item.word, index));
}

export { showCards };

