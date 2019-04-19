import BaseResponse from "../base/base-response";
import {Context} from "aws-lambda";

class AuthResponse extends BaseResponse {

    constructor(context: Context) {
        super(context);
    }
}

export default AuthResponse;