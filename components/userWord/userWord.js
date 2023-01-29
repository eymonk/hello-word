import { findTopicElement, createTopicElement } from '../container/container.js';
import { createTopicWord } from '../topics.js';

async function getWord(translation) {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://translate.api.cloud.yandex.net/translate/v2/translate/", {
        method: "POST",
        headers: {
            'Authorization': 'Bearer t1.9euelZqelc6Ti82SyJKWmo_JzcnNyO3rnpWai8qVls6akcudkJyLi8bJmJ3l8_d-GyBh-e8pIi16_d3z9z5KHWH57ykiLXr9.kG7VotHv9Usw_3mfVgm3Zp5ZfktUCrKXuwQ_K6nIA4vD8FH2hIrgZiq_HiAEKuaB2nm4BCpNvf-mqftqmWDJCw',
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
    return wordData.translation;
}

async function getWordSound(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const soundData = await response.json();

    return soundData[0].phonetics[0].audio;
}

async function getWordPicture(word) {
    const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=OMUSAWutprBM7ncm9fuHzV4VIpTVMsUnzLHv_iy0fhU&query=${word}`);
    const imageData = await response.json();
    console.log(imageData);

    return imageData.results[0].urls.small;
}

async function addUserWord(topic, translation) {
    const word = await getWord(translation);
    const audio = await getWordSound(word);
    const img = await getWordPicture(word);

    if (!findTopicElement(topic)) createTopicElement(topic);
    //adds word to inner dictionary
    createTopicWord(topic, word, translation, audio, img);
}

addUserWord('nice', 'собака')
    .then(resp => console.log(resp.json()))




