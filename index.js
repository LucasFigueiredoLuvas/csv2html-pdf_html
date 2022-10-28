const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const Table = require('./src/Table');
const Processor = require('./src/Processor');
const Reader = require('./src/Reader');
const HtmlParser = require('./src/HtmlParser');
const WriterHtml = require('./src/Writerhtml');
const PdfWtrite = require('./src/PdfWtrite');

async function main() {
    const rl = readline.createInterface({ input, output });
    console.log(' _________________________________________');
    console.log('|_Conversor de arquivos CSV para HTML/PDF_|');
    rl.question('|_Digite o caminho do arquivo: \n', async answer => {
        const readCsv = new Reader();
        const writerHtml = new WriterHtml();
        const data = await readCsv.read(answer);
        if(data[0]) {
            const processedData = Processor.knife(data[1]);
            const table = new Table(processedData);
            const html = await HtmlParser.parse(table);
            writerHtml.write(`./files/document-${Date.now()}.html`, html);
            PdfWtrite.writePdf(`./files/document-${Date.now()}.pdf`, html);
        } else {
            console.log('Arquivo não encontrado :(');
        }
        rl.close();
    });
}

main();