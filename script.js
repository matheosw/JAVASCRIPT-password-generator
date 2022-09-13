// Assignment Code
const generateBtn = document.querySelector("#generate");
const uCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*+-_";

function generatePassword() {
  
  let passwordLength = parseInt(prompt("how long would you want the length"));

 if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 ) {
  console.log(passwordLength)
 }

const useLower = confirm("Would you like Lowercase");
const useUpper = confirm("Would you like Uppercase");
const useNumber = confirm("Would you like Numbers");
const useSymbol = confirm("Would you like Special characters");

var char = "";
if(useLower) {
  char += lCaseLetters
}

if(useUpper) {
  char += uCaseLetters
}

if(useNumber) {
  char += numbers
}

if(useSymbol) {
  char += symbols
}

var randomPassword = "";

for(let i = 0; i < passwordLength; i++){
  var randomCharNum = Math.floor(Math.random() * char.length);
  randomPassword += char[randomCharNum]
  console.log(randomPassword)
}

return randomPassword;

}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
