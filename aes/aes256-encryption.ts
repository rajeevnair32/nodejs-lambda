import CryptoJS from "crypto-js";

class AES256Encryption {

    public static encrypt(message: string, secret: string): string {
        return CryptoJS.AES.encrypt(message, secret).toString();
    }

    public static decrypt(encryptedMessage: string, secret: string): string {
        return CryptoJS.AES.decrypt(encryptedMessage, secret).toString(CryptoJS.enc.Utf8);
    }
}

export default AES256Encryption;