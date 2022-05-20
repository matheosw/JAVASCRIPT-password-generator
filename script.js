// Assignment Code
const generateBtn = document.querySelector("#generate");
const uCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*+-_";


function generatePassword() {
  let password = "password";

  const passwordLenght = parseInt(prompt("how long would you want the length"));

 if (isNaN(passwordLenght) || passwordLenght < 8 || passwordLenght > 128 ) {
  return password;
 }

 
const useLower = confirm("Would you like Lowercase")
const useUpper = confirm("Would you like Uppercase")
const useNumber = confirm("Would you like Numbers")
const useSymbol = confirm("Would you like Special characters")

  console.log(useLower, useUpper, useNumber, useSymbol)
  return password;
}
// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
