module.exports = {
    ensureAuthenticated: function(req,res,next) {
        if(req.isAuthenticated()) {
            return next();
        }
        res.send('Please login to view this resource');
        res.redirect('/users/login');
    }
}