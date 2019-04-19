import AES256Encryption from "../aes/aes256-encryption";
import BaseResponse from "../base/base-response";
import {Context} from "aws-lambda";
import IResponse from "../base/iresponse";

interface UserData {
    user: string,
    pass: string
}

class AuthenticateLogin extends BaseResponse {

    constructor(context: Context) {
        super(context);
    }

    public getUserData(): UserData {
        return {
            user: "test",
            pass: "U2FsdGVkX19d3zYsSOZSgpbLHwtMDDzjYkEX4r6Bepw="
        };
    }

    public getResponse(): IResponse {
        let userData = this.getUserData();
        let pass = AES256Encryption.decrypt(userData.pass, this.config.config.password_secret_key);

        return {
            statusCode: 200,
            body: pass;
        };
    }
}

export default AuthenticateLogin;