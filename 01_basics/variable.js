const accountId = 12345
let accountEmail ="sonam@gmail.com"
var accountPassword ="123456"
accountCity = "muzaffarpur"
let accountState;

// accountId = 23
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])
accountEmail = "silky@gmail.com"
accountPassword = "234"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var
because of issue in block scope and fuctional scope
*/