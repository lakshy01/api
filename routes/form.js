
const route = require('express').Router();
const mongoose = require('mongoose');
const Form = require('../models/form');

route.post('/:userId', (req, res) => {
    const form = new Form();
    form.userId = req.params.userId,
        form.item = req.body.item,
        form.images = req.body.images,
        form.scale = req.body.scale,
        form.getDesignerHome = req.body.getDesignerHome,
        form.haveMaterial = req.body.haveMaterial,
        form.contact = req.body.cantact,
        form.emailId = req.body.emailId,
        form.address = req.body.address,
        form.city = req.body.city,
        form.state = req.body.state,
        form.country = req.body.country,
        form.pincode = req.body.pincode,
        form.quantity = req.body.quantity

    form.save((err, doc) => {
        if (!err) {
            res.status(200).send(doc);
            console.log("Custome design submitted");
        } else {
            res.status(500).send(err);
            console.log("Erro  while sending the custom design");
        }
    })
})

module.exports = route;