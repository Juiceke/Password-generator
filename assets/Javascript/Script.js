// Assignment code here

// assign some variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "!@,#$%&*{}[]/\+=";


// prompts for password
var generatePassword = function() {
  // how many characters?
var characters = window.prompt("How many characters would you like in your password? 8-128 characters allowed");
if (isNaN(characters)){
  alert("Please enter a number.");
  return generatePassword()
  }
if(characters<8 || length>128){
  alert("Please enter a number between 8 and 128.");
  return generatePassword()
}


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

