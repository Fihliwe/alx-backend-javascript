const fs = require('node:fs');

const countStudents = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error('Cannot load the database');
  }
  lineReader = fs
    .readFileSync(filePath, 'utf-8')
    .toString()
    .split('\n')
    .length
  console.log(lineReader.length - 1)
};

module.exports = countStudents;
