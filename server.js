const express = require('express');
const cors = require('cors');  
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); 
app.use(bodyParser.json());
app.use(express.static('public');

let callPrice = 2.75;
let smsPrice = 0.65;

// Words Widget API
app.get('/api/word_game', (req, res) => {
    const sentence = req.query.sentence || '';
    const words = sentence.split(' ');
    if (words.length === 0) return res.json({ longestWord: 0, shortestWord: '', sum: 0 });

    const lengths = words.map(word => word.length);
    const longestWord = Math.max(...lengths);
    const shortestWord = words.reduce((shortest, word) => word.length < shortest.length ? word : shortest, words[0]);
    const sum = lengths.reduce((acc, length) => acc + length, 0);

    res.json({
        longestWord,
        shortestWord,
        sum
    });
});

// Total Phone Bill API
app.post('/api/phonebill/total', (req, res) => {
    const { bill } = req.body;
    if (!bill) return res.status(400).json({ error: 'Bill is required' });

    const items = bill.split(',');
    const total = items.reduce((sum, item) => {
        if (item === 'call') return sum + callPrice;
        if (item === 'sms') return sum + smsPrice;
        return sum;
    }, 0);

    res.json({ total: total.toFixed(2) });
});

app.get('/api/phonebill/prices', (req, res) => {
    res.json({ call: callPrice, sms: smsPrice });
});

app.post('/api/phonebill/price', (req, res) => {
    const { type, price } = req.body;
    if (type !== 'call' && type !== 'sms') return res.status(400).json({ error: 'Invalid type' });

    if (type === 'call') callPrice = parseFloat(price);
    if (type === 'sms') smsPrice = parseFloat(price);

    res.json({
        status: 'success',
        message: `The ${type} was set to ${price}`
    });
});

// Enough Airtime API
app.post('/api/enough', (req, res) => {
    const { usage, available } = req.body;
    if (!usage || available === undefined) return res.status(400).json({ error: 'Usage and available airtime are required' });

    const items = usage.split(',');
    const totalCost = items.reduce((sum, item) => {
        if (item === 'call') return sum + callPrice;
        if (item === 'sms') return sum + smsPrice;
        return sum;
    }, 0);

    res.json({ result: (available - totalCost).toFixed(2) });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
