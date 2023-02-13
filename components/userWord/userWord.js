import { findTopicElement, createTopicElement } from '../container/container.js';
import { createTopicWord } from '../topics.js';
import getToken from '../token/getToken.js';
import state from '../state.js';

function deleteArticleFromWord(word) {
    const wordParts = word.split(' ');
    const result = wordParts[1] ? wordParts[1] : wordParts[0];
    return result;
}

async function getWord(translation) {
    if (!state.token) await getToken();

    const response = await fetch("https://cors-anywhere.herokuapp.com/https://translate.api.cloud.yandex.net/translate/v2/translate/", {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${state.token}`,
        },
        body: JSON.stringify({
            sourceLanguageCode: "ru",
            targetLanguageCode: "en",
            format: "PLAIN_TEXT",
            texts: [translation],
            folderId: "b1gkjg9bgh2jminhmhjm",
            glossaryConfig: {
                glossaryData: {
                    glossaryPairs: [
                        {
                            sourceText: "string",
                            translatedText: "string"
                        }
                    ]
                }
            }
        }),
    });

    const wordData = await response.json();
    return deleteArticleFromWord(wordData.translations[0].text);
}

async function getWordSound(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const soundData = await response.json();
    const audioItem = soundData[0].phonetics.find(item => item.audio !== '');
    return audioItem.audio;
}

async function getWordPicture(word) {
    const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=OMUSAWutprBM7ncm9fuHzV4VIpTVMsUnzLHv_iy0fhU&query=${word}`);
    const imageData = await response.json();
    const image = imageData.results[0].urls.small;
    return image;
}

async function addUserWord(topic, translation) {
    const word = await getWord(translation);
    console.log(word)
    const audio = await getWordSound(word);
    console.log('got sound');
    const img = await getWordPicture(word);

    if (!findTopicElement(topic)) createTopicElement(topic);
    //adds word to inner dictionary
    createTopicWord(topic, word, translation, audio, img);
    console.log(word)
    console.log('ok');
}

addUserWord('nice', 'собака');



