const topics = {};

function createTopicWord(word, translation) {
    return {
        word, translation
    }
}
function addTopic(name, words) {
    topics[name] = words;
}

export { addTopic, createTopicWord };

export default topics;