const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // destino dos arquivos.
        filename: (req, file, cb) => { // configurações do nome do arquivo upado
            const ext = path.extname(file.originalname); // pegamos a extenção do arquivo.
            const name = path.basename(file.originalname, ext); // pegamos o nome.
            cb(null, `${name}-${Date.now()}${ext}`); // definimos um nome unico e padrão.
        }
    }),
}
