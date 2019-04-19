import { Handler, Context, Callback } from 'aws-lambda';
import SaveJsonResponse from "./savejson/save-json-response";
import AuthenticateLogin from "./auth/auth-login";

const savejson: Handler = (event: any, context: Context, callback: Callback) => {
    callback(undefined, new SaveJsonResponse(context).getResponse());
};

const login: Handler = (event: any, context: Context, callback: Callback) => {
    callback(undefined, new AuthenticateLogin(context).getResponse());
}

export { savejson, login }