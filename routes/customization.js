const router = require("express").Router();
const Customization = require('../models/customize');

// router.use(bodyParser.json());

router.route('/')
    .get((req, res, next) => {
        Customization.find({})
            .then((items) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(items);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Customization.create(req.body)
            .then((items) => {
                console.log('Item Category Created ', items);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(items);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('/:item_id')
    .get((req, res, next) => {
        Customization.findById(req.params.item_id)
            .then((items) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(items);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('/:item_id/customization')
    .get((req, res, next) => {
        Customization.findById(req.params.item_id)
            .then((items) => {
                if (items != null) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(items.customizations);
                }
                else {
                    err = new Error('Item ' + req.params.item_id + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post((req, res, next) => {
        Customization.findById(req.params.item_id)
            .then((items) => {
                if (items != null) {
                    req.body.author = req.user._id;
                    items.comments.push(req.body);
                    items.save()
                        .then((items) => {
                            Customization.findById(items._id)
                                .then((items) => {
                                    res.statusCode = 200;
                                    res.setHeader('Content-Type', 'application/json');
                                    res.json(items);
                                })
                        }, (err) => next(err));
                }
                else {
                    err = new Error('Item ' + req.params.item_id + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('/:item_id/customization/:customizationId')
    .get((req, res, next) => {
        Customization.findById(req.params.item_id)
            .then((items) => {
                if (items != null && items.customizations.id(req.params.customizationId) != null) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(items.customizations.id(req.params.customizationId));
                }
                else if (items == null) {
                    err = new Error('Item ' + req.params.dishId + ' not found');
                    err.status = 404;
                    return next(err);
                }
                else {
                    err = new Error('Customization ' + req.params.customizationId + ' not found');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    });


module.exports = router;

