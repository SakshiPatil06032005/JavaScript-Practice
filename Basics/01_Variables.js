const accountId = "123456"           // We can not change the value of accountId beacuase it is declared with const
let accountEmail = "user@example.com"
var accountPassword = "password123"     // Var is not preffered to use beacause it has some scoping issues
accountcity = "Jaipur"               // We can declare a variable without using var, let or const but it is not recommended to do so because it will create a global variable which can lead to unexpected behavior in larger codebases
let accountName;          // We can declare a variable without initializing it, it will have the value of undefined

console.log(accountId)
console.table([accountEmail, accountPassword, accountcity, accountName])

