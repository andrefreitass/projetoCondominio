export class LazerModel {
    constructor(_id = '', local = '', descricao = '', data = '') {
        this._id = _id;
        this.local = local;
        this.descricao = descricao;
        this.data = data;
    }

    _id: string;
    local: string;
    descricao: string;
    data: string;
}
