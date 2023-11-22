import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { loginResponseDTO } from "../dtos/user.dto.js";
import { createAccessToken, createRefreshToken } from "../middleware/jwt.middleware.js";


const JWT_SECRET = "MY_SECRET_KEY";

export const getLoginUser = (data) =>{

    const {id, pw} = data;
    // id, pw를 통해 DAO
    // 원래는 DB 불러와야 하는데, 일단은 Json 파일로 만들어서 보낼게용
    // 아래 userData가 실제 DB에서 불러온 데이터라고 가정
    const userData = {"userid": "umcweb", "username": "UMC 웹 파이팅", "password": "1234"};

    if(!id || !pw){
        console.log("로그인 실패");
        throw new BaseError(status.LOGIN_PARAM_NOT_EXIST);
    }else if(userData.userid != id){
        console.log("로그인 실패");
        throw new BaseError(status.LOGIN_ID_NOT_EXIST);
    }else if(userData.password != pw){
        console.log("로그인 실패");
        throw new BaseError(status.LOGIN_PASSWORD_WRONG);
    }

    const accessToken = createAccessToken(userData);
    // const refreshToken = createRefreshToken();

    return loginResponseDTO(userData, accessToken);
    // return loginResponseDTO(userData, accessToken, refreshToken);
}