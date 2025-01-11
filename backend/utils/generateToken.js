import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId,res) => {
    const token =jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d'
    });

    res.cookie ("jwt",token,{
        maxAge: 15*24*60*60*1000,//MS
        httpOnly: true, //cookie can't be accessed by JS to prevent XSS
        secure: process.env.NODE_ENV !== 'development', //cookie works on HTTPS only
        sameSite : "strict" //cookie works for the same domain only to prevent CSRF Cross-Site Request Forgery
    });
};

export default generateTokenAndSetCookie;