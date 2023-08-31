const fs = require('fs');
const path = require('path');

const targetFolderPath = path.join(__dirname, '../src/posts/'); // 대상 폴더 경로
const data = [];

fs.readdirSync(targetFolderPath).forEach((filename) => {
  data.push(filename);
});

const dataJsonPath = path.join(__dirname, '../src/datas/data.json'); // data.json 파일 생성 경로
fs.writeFileSync(dataJsonPath, JSON.stringify(data), 'utf-8');

console.log('data.json created successfully.');
