const express = require('express');
const router = express.Router();

// Landing page route
router.get('/', (req, res) => {
    res.send('<h1>Welcome to the Learning Platform!</h1>');
});

module.exports = router;
