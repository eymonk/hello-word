import { addTopic, createTopicWord } from './components/topics.js';
import './components/nav/nav.js';
import './components/userWord/userWord.js';

const houseWords = [
  createTopicWord('window', 'окно'),
  createTopicWord('roof', 'крыша'),
  createTopicWord('attic', 'чердак'),
  createTopicWord('porch', 'крыльцо'),
  createTopicWord('stairs', 'лестница'),
  createTopicWord('door', 'дверь'),
  createTopicWord('fireplace', 'камин'),
  createTopicWord('fence', 'забор'),
]
addTopic('house', houseWords);

const kitchenWords = [
  createTopicWord('knife', 'нож'),
  createTopicWord('spoon', 'ложка'),
  createTopicWord('fork', 'вилка'),
  createTopicWord('plate', 'тарелка'),
  createTopicWord('cup', 'чашка'),
  createTopicWord('teapot', 'чайник'),
  createTopicWord('ladle', 'поварешка'),
  createTopicWord('pan', 'сковорода'),
]
addTopic('kitchen', kitchenWords);


const bathroomWords = [
  createTopicWord('shower', 'душ'),
  createTopicWord('bath', 'ванна'),
  createTopicWord('slippers', 'тапки'),
  createTopicWord('soap', 'мыло'),
  createTopicWord('mirror', 'зеркало'),
  createTopicWord('towel', 'полотенце'),
  createTopicWord('shampoo', 'шампунь'),
  createTopicWord('hairdryer', 'фен'),
]
addTopic('bathroom', bathroomWords);

const roadWords = [
  createTopicWord( 'wheel', 'колесо'),
  createTopicWord( 'car', 'машина'),
  createTopicWord( 'fuel', 'топливо'),
  createTopicWord( 'luggage', 'багаж'),
  createTopicWord( 'driver', 'водитель'),
  createTopicWord( 'passenger', 'пассажир'),
  createTopicWord( 'sign', 'знак'),
  createTopicWord( 'traffic light', 'светофор'),
]
addTopic('road', roadWords);


const bodyWords = [
  createTopicWord('head', 'голова'),
  createTopicWord('forehead', 'лоб'),
  createTopicWord('arm', 'рука'),
  createTopicWord('leg', 'нога'),
  createTopicWord('back', 'спина'),
  createTopicWord('stomach', 'живот'),
  createTopicWord('elbow', 'локоть'),
  createTopicWord('knee', 'колено'),
]
addTopic('body', bodyWords);


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
