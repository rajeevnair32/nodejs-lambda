import {Context} from "aws-lambda";
import IResponse from "./iresponse";
import Config from "../conf/config";

abstract class BaseResponse {
    private _context: Context;
    private _config: Config;

    constructor(context: Context) {
        this._config = new Config();
    }

    public get context(): Context {
        return this._context;
    }

    public get config(): Config {
        return this._config;
    }

    public abstract getResponse(): IResponse;
}

export default BaseResponse;