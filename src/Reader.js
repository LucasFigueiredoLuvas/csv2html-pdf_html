const fs = require('fs');
const util = require('util');

class Reader {
    constructor() {
        this.filepath = util.promisify(fs.readFile);
    }
    async read(filepath) {
        try {
            const data = await this.filepath(filepath, {encoding: 'utf-8'});
            return [true, data];
        } catch (error) {
            return [false, undefined];
        }
    }
}

module.exports = Reader;