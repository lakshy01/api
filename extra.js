// .post((req, res, next) => {
//     Customization.find({_id:req.params._id})
//         .then((section) => {
//             if (section) {
//                 res.json({ msg: 'section is already registered' });
//             } else {
//     Customization.create(req.body)
//         .then((customizations) => {
//             console.log('Customization Category Created ', customizations);
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.json(customizations);
//         }, (err) => next(err))
//         .catch((err) => next(err));
//         }
//     })
//     .catch((err) => next(err));
// });