
function protectRoutes(req, res, next) {
    if (!res.locals.isAuth) {
        return res.redirect('/401');  //Not authenticated
    }

    if (req.path.startsWith('/admin') && !res.locals.isAdmin) {
        return res.redirect('/403');  //Not authorized
    }

    next();
}

module.exports = protectRoutes;