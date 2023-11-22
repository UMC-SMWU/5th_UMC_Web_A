import jwt, { decode, sign } from 'jsonwebtoken';
import { BaseError } from '../../config/error';
import { status } from '../../config/response.status';

const JWT_SECRET = "MY_SECRET_KEY";
// 일반적으로 .env 파일에 넣음 안그럼 털려요~

// JWT 인증
export const verifyToken = (req, res, next) => {
    try{
        res.locals.decoded = jwt.verify(req.headers.authorization, JWT_SECRET);
        return next();
    } catch (err) {
        // 인증 실패
        if(err.name === "TokenExpiredError"){
            throw new BaseError(status.TOKEN_IS_EXPIRED);
        }
        if(err.name === "JsonWebTokenError"){
            throw new BaseError(status.TOKEN_IS_INVALID)
        }
    }
}

export const createAccessToken = (data) => {
    const payload = {
        "id": data.userid,
        "username": data.username,
    };

    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: '15m',    // 토큰 유효 기간 (변경 가능)
        issuer: 'UMC Web WB'
    });
}

export const createRefreshToken = () => {
    return jwt.sign({}, JWT_SECRET, {
        expiresIn: '14d',    // 토큰 유효 기간 (변경 가능)
        issuer: 'UMC Web WB'
    });
}
