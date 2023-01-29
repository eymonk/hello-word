import topics from '../topics.js';

function createCard(topic, word, number) {
    const cardsContainer = document.querySelector('.cards');
    const cardTemplate = `
          <p id="label-${number}" class="cards__label">${word}</p>
          <input id="input-${number}" type="text" placeholder="перевод">
          <button id="btn-${number}" class="cards__btn" >submit</button>
          <button class="cards__sound-btn">
            🔊<audio id=audio-"${number}" src="assets/audio/${topic}/${word}.mp3"></audio>
          </button>
          <p id="back-label-${number}" class="cards__back-label"></p>`;

    const newCard = document.createElement('div');
    newCard.classList.add('cards__item');
    newCard.id = `$card-${number}`;
    newCard.innerHTML = cardTemplate;

    return cardsContainer.append(newCard);
}

function showCards(topic) {
    topics[topic].forEach((item,index) => createCard(topic, item.word, index));
}

export { showCards };

