import passport from "passport";

export const protect = (req,res,next) => {
    passport.authenticate(
        'jwt', 
        {
        session: false
        }, 
        (err, user, info) => {
            if (err || !user) {
                return res.status(401).json({
                    message: info? info.message : "Unauthorized",
                    err: err || "Tidak valid",
                });
            }

            req.user = user;

            return next(); // untuk mengizinkan user tersebut untuk lewat
        }
    )(req,res,next);
}