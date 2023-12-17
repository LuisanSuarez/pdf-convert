const fs = require("fs");
const pdf = require("pdf-parse");

const options = {
  // internal page parser callback
  // you can set this option, if you need another format except raw text
  // pagerender: render_page,
  // max page number to parse
  max: 2,
};

let dataBuffer = fs.readFileSync("./document.pdf");
pdf(dataBuffer, options).then(function (data) {
  // number of pages
  console.log(data.numpages);
  // number of rendered pages
  console.log(data.numrender);
  // PDF info
  console.log(data.info);
  // PDF metadata
  console.log(data.metadata);
  // PDF.js version
  // check https://mozilla.github.io/pdf.js/getting_started/
  console.log(data.version);
  // PDF text
  console.log(data.text);
});
