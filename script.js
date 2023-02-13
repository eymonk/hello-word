import { createTopicWord } from './components/topics.js';
import { openNavigation } from './components/container/container.js';
import './components/nav/nav.js';
import './components/userWord/userWord.js';
import getToken from './components/token/getToken.js';

const createHouseWord = createTopicWord.bind(null, 'house');
createHouseWord('attic', 'чердак');
createHouseWord('door', 'дверь');
createHouseWord('fence', 'забор');
createHouseWord('fireplace', 'камин');
createHouseWord('porch', 'крыльцо');
createHouseWord('roof', 'крыша');
createHouseWord('stairs', 'лестница');
createHouseWord('window', 'окно');

const createKitchenWord = createTopicWord.bind(null, 'kitchen');
createKitchenWord('knife', 'нож');
createKitchenWord('spoon', 'ложка');
createKitchenWord('fork', 'вилка');
createKitchenWord('plate', 'тарелка');
createKitchenWord('cup', 'чашка');
createKitchenWord('teapot', 'чайник');
createKitchenWord('ladle', 'поварешка');
createKitchenWord('pan', 'сковорода');

const createBathroomWord = createTopicWord.bind(null, 'bathroom');
createBathroomWord('shower', 'душ');
createBathroomWord('bath', 'ванна');
createBathroomWord('slippers', 'тапки');
createBathroomWord('soap', 'мыло');
createBathroomWord('mirror', 'зеркало');
createBathroomWord('towel', 'полотенце');
createBathroomWord('shampoo', 'шампунь');
createBathroomWord('hairdryer', 'фен');

const createRoadWord = createTopicWord.bind(null, 'road');
createRoadWord( 'wheel', 'колесо');
createRoadWord( 'car', 'машина');
createRoadWord( 'fuel', 'топливо');
createRoadWord( 'luggage', 'багаж');
createRoadWord( 'driver', 'водитель');
createRoadWord( 'passenger', 'пассажир');
createRoadWord( 'sign', 'знак');
createRoadWord( 'traffic light', 'светофор');

const createBodyWord = createTopicWord.bind(null, 'body');
createBodyWord('head', 'голова');
createBodyWord('forehead', 'лоб');
createBodyWord('arm', 'рука');
createBodyWord('leg', 'нога');
createBodyWord('back', 'спина');
createBodyWord('stomach', 'живот');
createBodyWord('elbow', 'локоть');
createBodyWord('knee', 'колено');


let theme = 'light'
function changeTheme(obj){
  switch(theme){
    case 'light':
      document.documentElement.style.setProperty('--light-color', 'hsl(350, 85%, 75%)')
      document.documentElement.style.setProperty('--dark-color', '#444')
      document.documentElement.style.setProperty('--dark-dark-color', '#222')
      document.documentElement.style.setProperty('--light-dark-color', 'hsl(350, 85%, 55%)')
      document.querySelectorAll('.main-nav').forEach(c => c.style.color = 'var(--font-light-color)')
      theme = 'dark'
    break
    case 'dark':
      document.documentElement.style.setProperty('--light-color', 'hsl(85, 78%, 48%)')
      document.documentElement.style.setProperty('--dark-color', '#ddd')
      document.documentElement.style.setProperty('--dark-dark-color', '#444')
      document.documentElement.style.setProperty('--light-dark-color', 'hsl(85, 78%, 35%)')
      document.querySelectorAll('.main-nav').forEach(c => c.style.color = 'var(--font-dark-color)')
      theme = 'light'
    break
  }
}

const headerTitle = document.querySelector('.header__title');
headerTitle.addEventListener('click', openNavigation);

getToken();
