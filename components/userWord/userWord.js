async function getWordTranslation(word) {
    const response = await fetch("https://frengly.com/frengly/data/translateREST", {
        method: "POST",
        body: JSON.stringify({
            src: 'ru',
            dest: 'en',
            text: word,
            email: 'dana-kon@ramble.ru',
            password: 'lfYZ161096',
        }),
        headers: { "Content-Type": "application/json" }
    });

    const res = await response.json();

    return res.translation;
}

