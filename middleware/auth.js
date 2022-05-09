const { cookie } = require("express/lib/response");
const {User} = require("../models/User");

let auth = (req, res, next) => {

    //인증처리 하는 곳

    //클라이언트 쿠키에서 토큰 가져 옴
        let token = req.cookies.x_auth;

    //토큰 디코드 한 후 유저를 찾는다.
        User.findByToken(token, (err, user) => {
            if(err) return err;
            if(!user) return res.json({ isAuth: false, error: true})
            
            req.token = token;
            req.user = user;
            next();
        })
    //유저가 있으면 인증 O

    //유저 없으면 인증 x
}

module.exports = { auth };
