const topics = {};

function addWordToTopic(topic, word) {
    if (!topics[topic]) topics[topic] = [];
    topics[topic].push(word);
};

function createTopicWord(topic, word, translation, audio, img) {
    const formattedWord = word.includes(' ') ? word.split(' ').join('_') : word;
    const topicWord = {
        word: formattedWord,
        translation,
        audio,
        img,
    }

    addWordToTopic(topic, topicWord);
}

export { createTopicWord };
export default topics;