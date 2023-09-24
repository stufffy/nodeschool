function innerFunction (name1, name2, callback) {
    
    const result1 = name1 + ' and ' + name2 + ' are idiots.'
    const result2 = name2 + ' and ' + name1 + ' are idiots.'

    callback(null, result1, result2)
}

module.exports = innerFunction