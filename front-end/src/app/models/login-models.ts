export class LoginModels {
    constructor(_id = '', login = '', senha = '') {
        this._id = _id;
        this.login = login;
        this.senha = senha;           
    }

    _id: string;
    login: string;
    senha: string;
}