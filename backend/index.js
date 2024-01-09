const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public',express.static(path.join(__dirname, '..', 'frontend', '/public')));

app.use('/', require('./routes/root'));
app.use('/', require('./routes/example-page'));

app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/404.html'));
});

app.listen(PORT, () => console.log('Listening at ' + PORT));