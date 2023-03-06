const express = require('express');
const router = express.Router();
const ali = require('../services/aliLang');
router.get('/', async function (req, res, next) {
    try {
        res.json(await ali.getMultiple(req.query.ali))
    } catch (err) {
        console.error(`Error while showing address`, err.message);
        next(err);
    }
});
router.get('/feedbacklist', async function (req, res, next) {
    try {
        res.json(await ali.xShowfeedback(req.query.ali))
    } catch (err) {
        console.error(`Error while feedback`, err.message);
        next(err);
    }
});

router.post('/createfeedback', async function (req,res,next){
    try{
        res.json(await ali.createfeedback(req.body));
        console.log("Feedback created succesfully");
    }catch(err){
        console.error(`Error while creating message ${err.message}`);
        next(err);
    }
})
router.post('/createwallet', async function (req, res, next) {
    try {
        res.json(await ali.create(req.body));
        console.log("wallet address added")
    } catch (err) {
        console.error(`Error while creating address`, err.message);
        next(err);
    }
});
router.post('/addData', async function (req, res, next) {
    try {
        res.json(await ali.adddata(req.body));
        console.log("User Data added")
    } catch (err) {
        console.error(`Error while added data`, err.message);
        next(err);
    }
});
router.get('/UserDataView',async function (req,res,next){
    try{
        res.json(await ali.Show(req.query.ali))
    }catch(err){
        console.error(`Error while showing Data`,err.message);
        next(err);
    }
})
router.delete('/:name', async function(req,res,next){
    try{
        res.json(await ali.deletewallet(req.params.name));
        console.log("deleted address");
    } catch (err){
        console.log("Error",err.message)
        next(err);
    }
})
module.exports = router;