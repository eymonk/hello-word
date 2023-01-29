const topics = {};

function createTopicWord(word, translation) {
    const formattedWord = word.includes(' ') ? word.split(' ').join('_') : word;

    return {
        word: formattedWord,
        translation
    }
}
function addTopic(name, words) {
    topics[name] = words;
}

export { addTopic, createTopicWord };

export default topics;