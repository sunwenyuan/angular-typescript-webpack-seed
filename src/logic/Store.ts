export class Store {
    static data = [];
    static fileName = '';

    static setData(data) {
        Store.data = data;
    }

    static setName(name) {
        Store.fileName = name;
    }
}