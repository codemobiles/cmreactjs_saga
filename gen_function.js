function* generate(i){
    yield 10
    yield 11
    yield i
    yield i + 10
}

const gen = generate(10)

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)