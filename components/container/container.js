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

function findTopicElement(topic) {
    const topicElements = [...dom.nav.children];
    return topicElements.find(item => item.dataset.topic === topic);
}

function createTopicElement(topic) {
    const topicElement = document.createElement('li');
    topicElement.classList.add('container__nav-item');
    topicElement.setAttribute('data-topic', topic);
    topicElement.textContent = topic;
    topicElement.addEventListener('click', () => openTopic(topic));

    dom.nav.append(topicElement);
}


function openTopic(topic) {
    const cardsContainer = dom.cardsGrid;
    closeNavigation();
    cardsContainer.innerHTML = '';
    cardsContainer.classList.remove('hidden');
    showCards(topic);
}

export {
    openNavigation,
    closeNavigation,
    openTopic,
    findTopicElement,
    createTopicElement
}