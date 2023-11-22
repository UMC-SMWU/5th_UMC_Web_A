import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { getUserPayload } from "../providers/user.provider.js";
import { getLoginUser } from "../services/user.service.js";

export const userLogin = (req, res, next) => {
    console.log("로그인을 요청하였습니다!");
    console.log("id:", req.body.id, "pw:", req.body.pw);    // param에서 값이 어떻게 오나 확인용~

    res.send(response(status.SUCCESS, getLoginUser(req.body)));
}

export const userPayload = (req, res, next) => {
    res.send(response(status.SUCCESS, getUserPayload(res.locals.decoded)));

}