const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Word Game API Route
app.get('/api/word_game', (req, res) => {
    const sentence = req.query.sentence;

    if (!sentence) {
        return res.status(400).json({ error: 'Please provide a sentence query parameter.' });
    }

    // Split the sentence into words
    const words = sentence.split(' ');

    // Calculate longest word
    const longestWord = words.reduce((longest, word) => word.length > longest.length ? word : longest, "");

    // Calculate shortest word
    const shortestWord = words.reduce((shortest, word) => word.length < shortest.length ? word : shortest, words[0]);

    // Sum of the length of all words
    const sum = words.reduce((total, word) => total + word.length, 0);

    // Return the sentence statistics
    res.json({
        longestWord: longestWord.length,
        shortestWord,
        sum
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
