const getFilteredFiles = require('./mymodule.js')

const filePath = process.argv[2]
const ext = process.argv[3]

function printFiles (err, data) {
    if (err) {
        return console.log('error lmao')
    }
    for (let i = 0; i < data.length; i++) {
        console.log(data[i])
    }
}

getFilteredFiles(filePath, ext, printFiles)
