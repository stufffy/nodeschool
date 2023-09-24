const fs = require('fs')
const path = require('path')


function toExport(filePath, ext, printFiles) {

    function validateExtFilter(err, list) {
        if (err !== null) { // if error is not null, means there is an error
            printFiles(err)
            return
        }
        
        function jaslyn(fileName) { // fileName is each element in the array; this function will be called by filter() for every element
            return path.extname(fileName) == '.' + ext // this part 'path.extname(fileName) == ext' itself will return 'true' or 'false' which is a boolean type value
        }

        list = list.filter(jaslyn) // filter() is similar to loop, will check every element
        printFiles(null, list)
    }

    fs.readdir(filePath, validateExtFilter)
}

module.exports = toExport
