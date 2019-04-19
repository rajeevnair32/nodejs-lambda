import baseConfig from './config.json';

class Config {
    private _config: any;

    constructor() {
        this._config = baseConfig;
    }

    public get config() {
        return this._config;
    }
}

export default Config;