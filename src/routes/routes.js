const express = require('express');
const app = express();
const router = express.Router();
const pdf = require('html-pdf');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/create-cv', (req, res) => {
  res.render('create-cv');
});

router.get('/download/:name/:old', (req, res) => {
  const html = `<h2>Meu nome é <strong>${req.params.name}</strong> e tenho <strong>${req.params.old} Anos</strong></h2>`

  const options = {
    type: 'pdf',
    format: 'A4',
    orientation: 'portrait'
  }

  pdf.create(html, options).toFile('src/pdfs/curriculo.pdf', (err, res) => {
    if(err) console.log(err);
    else console.log(res);
  })

  res.download('src/pdfs/curriculo.pdf');
});

module.exports = router;
