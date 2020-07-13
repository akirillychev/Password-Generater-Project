
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //GIVEN I need a new, secure password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


// Assignment Code


function generatePassword(){
var tempCharacter = [];
var lowercase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers =["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var Special =["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var password ="";



 
 
  var pwdLength = prompt("Please enter password length");

if (pwdLength<8) {
  console.log("Inside less 8");
  
    alert("Length of the password must be more than 8 characters");
    generatePassword();
  }

  if(pwdLength>128){
    console.log("inside more 128 ");
    alert("Length of the password must be less than 128 characters");
    generatePassword();
  }

  var confirmNum = confirm("Do you want to se numeric?");
  var confirmSpecial = confirm("Do you want to use special characters?");
  var confirmUpper = confirm("Do you want to use uppercase?");
  var confirmLower = confirm("Do you want to use lowercase?");

// if lowercase = true 
if (confirmLower === true) {
  // than we can add into the empty array 
  // const array3 = array1.concat(array2);    <-- explanation of what concatenating does
  tempCharacter = tempCharacter.concat(lowercase);
  
}
if (confirmUpper === true) {
  // than we can add into the empty array 
  tempCharacter = tempCharacter.concat(uppercase);
  
}
if (confirmNum === true) {
  // than we can add into the empty array 
  tempCharacter = tempCharacter.concat(numbers);
 
}
if (confirmSpecial === true) {
  // than we can add into the empty array 
  tempCharacter = tempCharacter.concat(Special);
}



for (var i = 0; i < pwdLength; i++) {
var randomChar = tempCharacter[Math.floor(Math.random() * tempCharacter.length)];
password = password + randomChar
console.log(password);
}

return password; 
}
