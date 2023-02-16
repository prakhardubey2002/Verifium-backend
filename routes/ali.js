const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/aliLang');
router.get('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.getMultiple(req.query.programmingLanguages))
    } catch (err) {
        console.error(`Error`, err.message);
        next(err);
    }
});
router.post('/create', async function (req, res, next) {
    try {
        res.json(await programmingLanguages.create(req.body));
    } catch (err) {
        console.error(`Error while creating programming language`, err.message);
        next(err);
    }
});
module.exports = router;