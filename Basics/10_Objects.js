// Singleton
// Object.create

// Object literals

const mysym = Symbol("key1")
const jsuser = 
{
    name : "Sakshi",
    "full Name" : "Sakshi Patil",
    age : 21,
    [mysym] : "mykey",        // syntax for symbol
    email : "sakhi@google.com",
    location : "Jalgaon",
    isLoggedIn : false,
    Loggedin : ["Saturday", "Friday"]
}

console.log(jsuser.name)
// console.log(jsuser.full name)        // It will thriugh an error.
console.log(jsuser["full Name"])
console.log(jsuser["mysym"])
console.log(typeof jsuser["mysym"])

jsuser.email = "sakship@gmail.com"
// Object.freeze(jsuser)
// jsuser.email = "psakshi@gmail.com"

console.log(jsuser.email)

jsuser.greetings = function()
{
    console.log("Good Morning! ;)")
}

console.log(jsuser.greetings())

jsuser.greetingsTwo = function()
{
    console.log(`Hello ${this.name} mam. How are you!`)
}

console.log(jsuser.greetingsTwo())