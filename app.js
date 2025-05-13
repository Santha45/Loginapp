const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'sk' && password === 'SK45') {
        res.send('Login successful!');
    } else {
        res.send('Invalid credentials');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
