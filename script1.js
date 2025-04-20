let num = [1, 2, 3, 4, 5, 6];
a = num.splice(1, "10", 3)
console.log(a)
let manusya = Object.freeze({//for not chaging content of object
  name: "Jeevan",
  age: 23,
  city: "Kathmandu",
  country: "Nepal",
  isMarried: false,
  hobbies: ["reading", "writing", "traveling"],
})
//console.log(manusya)
manusya.name = "Manoj"
//console.log(manusya.name)
//console.log(Object.keys(manusya))//for getting keys of object
//console.log(Object.values(manusya))//for getting values of object
let myinfo = {
  name: "Jeevan",
  age: 23,
  city: "Kathmandu",
  country: "Nepal",
}
//age = myinfo.age
let str = "I am from, Kathmandu"
let str2 = str.split(" ")//split string into array
console.log(str2)
city = myinfo.city
name = myinfo.name
console.log(name, age, city)
