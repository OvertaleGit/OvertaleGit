const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const targetFolderPath = path.join(__dirname, '../src/posts/'); // 대상 폴더 경로
const dataBox = {
  posts : [],
};

function getPost(postPath) {
  return readFile(postPath);
}

async function setPostArray() {
  const fileNames = fs.readdirSync(targetFolderPath)
  const promis = fileNames.map(async (file) => {
    var postPath = path.join(targetFolderPath, file);
    var data = await getPost(postPath);
    let post = {
      id : file,
      content : ""+data
    }
    dataBox.posts.push(post)
  })

  await Promise.all(promis)

  const dataJsonPath = path.join(__dirname, '../src/datas/data.json'); // data.json 파일 생성 경로
  fs.writeFileSync(dataJsonPath, JSON.stringify(dataBox), 'utf-8');

  console.log('data.json created successfully.');
}

setPostArray();