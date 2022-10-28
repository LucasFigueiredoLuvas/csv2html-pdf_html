class Table {
    constructor(arr) {
        this.header = arr[0];
        arr.shift();
        this.body = arr;
    }
    get rowsCount() {
        return this.header.length;
    }
    get columnsCount() {
        return this.body.length;
    }
}

module.exports = Table;