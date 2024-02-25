function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const test = randomNumberBetween(20, 21) 
console.log(test); // 20