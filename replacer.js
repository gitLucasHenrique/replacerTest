let replace = require('replace')
let pathList = require('fs')
let filePath = './files.txt'

pathList.readFile(filePath, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  let lines = data.split('\n')
  for (let i = 0; i < (lines.length-1); i++){
    replace({
      regex: 'anteaaaaaaa',
      replacement: 'ante',
      paths: [lines[i]],
      recursive: true,
      silent: true,
    })
  }
})
