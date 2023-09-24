const fs = require('fs')
const path = process.argv[2]



// const buffer = fs.readFileSync(path)
// const contents = buffer.toString()

fs.readFile(path, 'utf8', function (err, contents) {
    const lines = contents.split('\n')

    console.log(lines.length - 1)
})
