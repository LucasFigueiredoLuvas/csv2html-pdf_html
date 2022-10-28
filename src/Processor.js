class Processor {
    static knife(data) {
        let raw = data.split('\n');
        let rows = [];
        raw.forEach((element) => {
            rows.push(element.split(','));
        });
        rows.pop();
        return rows;
    }
}

module.exports = Processor;