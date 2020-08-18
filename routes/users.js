const router = require("express").Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');

router.get('/login', (req, res) => res.send('Login'));



router.get('/register', (req, res) => res.send('Register'));

router.post('/register', (req, res) => {
    console.log(req.body)
    // res.send('Registered');
    const { name, email, password, password2 } = req.body;
    let errors = [];

    if (!name || !email || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' });
    }
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' });
    }
    if (errors.length > 0) {
        res.send('Register again')
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
    } else {
        // res.send('pass')
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    res.json({ msg: 'Email is already registered' });
                } else {
                    const newUser = new User({
                        name,
                        email,
                        password
                    });
                    //Hash password
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            //Set password to hashed
                            newUser.password = hash;

                            newUser.save()
                                .then(user => {
                                    res.redirect('/users/login');
                                })
                                .catch(err => console.log(err));
                        }))
                }
            });
    }
});

//Login Handle
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/users/login'
    })(req, res, next);
});

router.post('/logout', (req, res) => {
    req.logout();
    res.redirect('/users/login');
});

module.exports = router;
