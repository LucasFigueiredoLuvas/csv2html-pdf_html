const htmlPdf = require('html-pdf');

class PdfWtrite {
    static writePdf(filepath, file) {
        htmlPdf
        .create(file, 
            { childProcessOptions: { env: { OPENSSL_CONF: '/dev/null', }, }})
        .toFile(filepath, (error) => {
            if (error) console.error(error);
            else console.log('\nArquivo salvo na pasta \'files\'');
        });
    }
}

module.exports = PdfWtrite;