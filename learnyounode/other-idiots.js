const idiotFunction = require('./idiot2.js')

function outerCallback(err, result1, result2) {
    if (err) {
        return console.log(err);
    }
    console.log(result1)
    console.log(result2)
}

idiotFunction('amal', 'jaslyn', outerCallback)

// output:
// amal and jaslyn are idiots
// jaslyn and amal are idiots