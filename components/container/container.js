const dom = {
    nav: document.querySelector('.container__nav'),
}

function closeNavigation() {
    dom.nav.classList.add('hidden');
}

function openNavigation() {
    dom.nav.classList.remove('hidden');
}

function openCards(topic) {
    closeNavigation();
}

export {
    openNavigation,
    closeNavigation,
    openCards,
}