const router = require("express").Router();
const Customization = require('../models/customize');

router.route('/')
.get((req,res,next) => {
    Customization.find({})
    .then((customizations) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(customizations);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Customization.create(req.body)
    .then((customizations) => {
        console.log('Customization Category Created ', customizations);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(customizations);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = router;
