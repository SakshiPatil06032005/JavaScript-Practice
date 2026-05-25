// const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Sakshi Patil"
tinderuser.email =  "sakshi@gmail.com"
tinderuser.isLoggedIn = false

const regularUser = 
{
    email : "p@gmail.com",
    fullname :
    {
        username :
        {
            firstName : "Sakshi",
            lastName : "Patil"
        }
    }
}

console.log(regularUser.email)
console.log(regularUser.fullname)
console.log(regularUser.fullname.username)
console.log(regularUser.fullname.username.firstName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1,obj2}
// console.log(obj3)

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
console.log(obj3)


const users = 
[
        {
            id : "1",
            email : "sakshi1@gmail.com"
        },
        {
            id : "2",
            email : "sakshi2@gmail.com"
        },
        {
            id : "3",
            email : "sakshi3@gmail.com"
        }
]

console.log(users[1].email)
console.log(tinderuser)

console.log(Object.keys(users))
console.log(Object.values(users))
console.log(Object.entries(users))

console.log(tinderuser.hasOwnProperty("isLoggedIn"))


// Destructure 

const course = 
{
    courseName : "JsCourse",
    courseInstructure : "pratik",
    courseFees : 999
}

const {courseInstructure : teacher} = course           // OR
// const {courseInstructure} = course
console.log(course.courseInstructure)    //instead of writing the long form we use the destructure.
console.log(teacher)