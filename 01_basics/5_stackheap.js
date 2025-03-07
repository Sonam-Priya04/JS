/* stack (primitive data type) = it create a copy and 
when we change in copy it does not affect the original value
   heap (non-primitive data type) = it provide reference and 
    change in reference will affect original
*/

//stack
let myName = "sonam"
let yourName = myName
yourName = "muskan"
console.log(myName) //sonam
console.log(yourName) //muskan( because it only change in copy value)

//heap
let user1 = {
    email : "user@gmail.com",
    age : 23
}

let user2 = user1

user2.email ="sonam@gmail.com"
console.log(user1) //change in original also
console.log(user2) // change value of email