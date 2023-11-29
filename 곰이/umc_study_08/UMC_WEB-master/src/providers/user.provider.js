import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { loginResponseDTO, payloadResponseDTO } from "../dtos/user.dto.js";
import jwt from "jsonwebtoken";

const SECRET_KEY = "MY_SECRET_KEY";

export const getUserPayload = (data) => {

    return payloadResponseDTO(data);
}