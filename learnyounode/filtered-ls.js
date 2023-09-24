const fs = require('fs')
const path = require('path')

const filePath = process.argv[2]
const ext = '.' + process.argv[3] // a string that is concataneted after a string, turns into a string

function validateExt (err, list) {
    if (err !== null) {
        return console.log('error = ' + err)
    }
    for (let i = 0; i < list.length; i++) { // use 'let' before 'i = 0', might access i variable somewhre else
        if (path.extname(list[i]) == ext) {
            console.log(list[i])
        }
    }
}

function validateExtFilter (err, list) {
    if (err !== null) { // if error is not null, means there is an error
        return console.log('error = ' + err)
    }

    function jaslyn(fileName) { // fileName is each element in the array; this function will be called by filter() for every element
        return path.extname(fileName) == ext // this part 'path.extname(fileName) == ext' itself will return 'true' or 'false' which is a boolean type value
    }

    list = list.filter(jaslyn) // filter() is similar to loop, will check every element

    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
    }
}

fs.readdir(filePath, validateExtFilter) // read filePath first, then call the validateExtFilter(). printing is done in the validateExtFilter()
