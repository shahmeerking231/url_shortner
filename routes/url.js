const express = require('express');
const { generateNewShortURL, redirectToURL, analyticsCheck } = require('../controllers/url');

const router = express.Router();

router.post('/', generateNewShortURL);
router.get('/:shortId', redirectToURL);
router.get('/analytics/:shortId', analyticsCheck);

module.exports = router;