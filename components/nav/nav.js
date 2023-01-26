import { closeNavigation, openCards } from '../container/container.js';

const dom = {
    navItems: document.querySelectorAll('.container__nav-item'),
}

dom.navItems.forEach(item => item.addEventListener('click', () => {
    openCards(item.dataset.topic);
}))