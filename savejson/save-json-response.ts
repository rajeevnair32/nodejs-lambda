import {Context} from "aws-lambda";
import BaseResponse from "../base/base-response";
import IResponse from "../base/iresponse";

class SaveJsonResponse extends BaseResponse {
    private _statusCode: number = 200;
    private _body: string;

    constructor(context: Context) {
        super(context);
    }

    public get statusCode(): number {
        return this._statusCode;
    }

    public set statusCode(statusCode: number) {
        this._statusCode = statusCode;
    }

    public get body(): string {
        return this._body;
    }

    public set body(body: string) {
        this._body = body;
    }

    public getResponse(): IResponse {
        this.save();

        const response: IResponse = {
            statusCode: this.statusCode,
            body: this.body
        };

        return response;
    }

    private save(): void {
        /*
        this.statusCode = 200;
        this.body = JSON.stringify({
            message: Math.floor(Math.random() * 10)
        });
        */
        let aws = require('aws-sdk');
        aws.config.update({region: 'us-east-1'});

        let ddb = new aws.DynamoDB();

        let params = {
            TableName: 'website',
            Item: {
                'name': 'test',
                'type': 'index',
                'content': { 'index': 'test'}
            }
        };

        ddb.putItem(params. function(err: any, data: any)) {
            if(err) {
                console.log("Error", err);
            } else {
                console.log("Success", data);
            }
        }
    }
}

export default SaveJsonResponse;