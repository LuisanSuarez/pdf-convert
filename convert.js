const data = require("./output.js");
const fs = require("fs");

const writeStream = fs.createWriteStream("output.csv", { encoding: "utf-8" });

// Process each pageTable and write to CSV
data.pageTables.forEach(pageTable => {
  pageTable.tables.forEach(tableRow => {
    const csvRow = tableRow.join(",") + "\n";
    writeStream.write(csvRow);
  });
});

writeStream.end();

writeStream
  .on("finish", () => {
    console.log("CSV file has been saved.");
  })
  .on("error", err => {
    console.error("Error writing to CSV file:", err);
  });
