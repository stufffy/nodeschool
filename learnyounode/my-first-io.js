const fs = require('fs')
const path = process.argv[2]
// const buffer = fs.readFileSync(path)
// const contents = buffer.toString()
console.log('something else')
const contents = fs.readFileSync(path, 'utf-8')
const lines = contents.split('\n')
console.log(lines.length - 1)
console.log('hi')