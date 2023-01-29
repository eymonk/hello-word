import { closeNavigation, openTopic } from '../container/container.js';

const dom = {
    navItems: document.querySelectorAll('.container__nav-item'),
}

dom.navItems.forEach(item => item.addEventListener('click', () => {
    openTopic(item.dataset.topic);
}))