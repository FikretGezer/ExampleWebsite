const path = require('path');
const express = require('express');
const router = express();

router.get('/example-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'pages', 'example-page.html'));
});

module.exports = router;