import passport from "passport";

export const protect = (req,res,next) => {
    passport.authenticate(
        'jwt', 
        {
        session: false
        }, 
        (err, user, info) => {}
    );
}