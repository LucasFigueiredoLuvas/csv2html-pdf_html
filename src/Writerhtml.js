const fs = require('fs');
const util = require('util');

class WriterHtml {
    constructor() {
        this.write = util.promisify(fs.writeFile);
    }
    async write(filepath, file) {
        try {
            await this.write(filepath, file);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = WriterHtml;