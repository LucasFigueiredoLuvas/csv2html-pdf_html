const ejs = require('ejs');

class HtmlParser {
    static async parse(table) {
        return ejs.renderFile('table.ejs',
        { 
            header: table.header, 
            body: table.body,
            fileName: Date.now()
        });
    }
}

module.exports = HtmlParser;