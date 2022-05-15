// Assignment Code
var generateBtn = document.querySelector("#generate");
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*+-_";
const p = "";

function generatePassword() {
let length = prompt("how long would you want the length");
let uCase = prompt("Would you like Lowercase")
let lcase = prompt("Would you like Uppercase")
let number = prompt("Would you like Numbers")
let symbols = prompt("Would you like Special characters")

  console.log(length, uCase, lCase, number, symbols)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
