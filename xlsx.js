const xlsx = require("xlsx");
const fs = require("fs");

// Read the CSV file as a string
const csvFileContent = fs.readFileSync("output.csv", "utf8");

// Convert the CSV string to an array of arrays
const data = csvFileContent.split("\n").map(row => row.split(","));

// Convert the array of arrays to a worksheet
const worksheet = xlsx.utils.aoa_to_sheet(data);

// Create a new workbook and add the worksheet
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");

// Write the workbook to an XLSX file
xlsx.writeFile(workbook, "output.xlsx");
