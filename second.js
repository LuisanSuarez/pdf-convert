const pdf_table_extractor = require("pdf-table-extractor");
const fs = require("fs");

//PDF parsed
function success(data) {
  //   try {
  //     const mdContent = data.map(row => `| ${row.join(" | ")} |`).join("\n");
  //     fs.writeFile("output.md", mdContent, err => {
  //       if (err) throw err;
  //     });
  //   } catch (err) {
  //     console.log("MD failed: " + err);
  //   }

  // JSON
  try {
    const jsonContent = JSON.stringify(data, null, 2);
    fs.writeFile("output.json", jsonContent, err => {
      if (err) throw err;
    });
  } catch (err) {
    console.log("JSON failed: " + err);
  }

  // JavaScript
  try {
    const jsContent = `module.exports = ${JSON.stringify(data, null, 2)};`;
    fs.writeFile("output.js", jsContent, err => {
      if (err) throw err;
    });
  } catch (err) {
    console.log("JS failed: " + err);
  }
}

//Error
function error(err) {
  console.error("Error: " + err);
}

pdf_table_extractor("./document.pdf", success, error);

// const csvContent = data.map(row => row.join(",")).join("\n");

// // Write to a CSV file
// fs.writeFile("output.csv", csvContent, err => {
//   if (err) throw err;
//   console.log("CSV file has been saved.");
// });
