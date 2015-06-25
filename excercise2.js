var userLogin = {username: "hunter", password: "hunter2"}
var loginName = prompt("Enter password for " + userLogin.username)

if (loginName == userLogin.password) {
    alert("Welcome!")
} else {
    alert("Get out!")
}
 