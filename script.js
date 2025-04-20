const a = ["apple", "cherry", "date", "elderberry"]
console.log(a[0], a[1])
const obj = { name: "John", age: 30, city: "New York" }
console.log(obj.city)
const str = "Hello, world!"
console.log(a.length)
/**shift-first remove
 unshift-first add
Pop-last remove
Push-last add
node --watch script.js for live reload
a.unshift("banana")**/
a.splice(0, 3, "banana")
console.log(a)
const name = "John"
const age = 30
const city = "New York"
const person = { name, age, city }
console.log(person)
