const pets = ['cat', 'dog', 'rat']
for (let i = 0; i < 3; i++) {
    pets[i] = pets[i] + 's' // turns 'cat' into 'cats'; the + operator concatenates 2 strings tgt; it will replace 0th element with 'cats'
}
console.log(pets)
