const path = require('path');
const express = require('express');
const router = express();

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..','index.html'));
});

module.exports = router;