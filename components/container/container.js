import { showCards } from '../cards/card.js';

const dom = {
    nav: document.querySelector('.container__nav'),
    cardsGrid: document.querySelector('.cards'),
}

function closeNavigation() {
    dom.nav.classList.add('hidden');
}

function openNavigation() {
    dom.nav.classList.remove('hidden');
    dom.cardsGrid.classList.add('hidden');
}

function openTopic(topic) {
    closeNavigation();
    dom.cardsGrid.classList.remove('hidden');
    showCards(topic);
}

export {
    openNavigation,
    closeNavigation,
    openTopic,
}