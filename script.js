// Password string format
let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lower =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// function invoked generate password / let statement declares a block-scoped local variable getPasswordOption

function generatePassword(){
    let password = getPasswordOption();
    let passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// // Function to prompt user for password options
function getPasswordOption() {
     // char + length = parseInt (parse a string & return an integer) prompt to store length of password from user input / console.log typeof checking
    //  for a varible(unknown value) or expression(concept using an unknown value)

    let charLen = parseInt(prompt('How many character password do you want for your password!')); 
    // let charLen = parseInt(length);
    // console.log(typeof charLen);

    // check if password length is a number. Prompts end if this evaluates false/ if statement('for length < 8 & length > 28')

    // "OR" statement asking if password is > 8 or < 128 characters block user attempt 

    if (charLen < 8 || charLen > 128) {
        alert('password length must be between 8 & 128 characters');
        
    }
    // Varible numChar (CharAt) returned specified character (num, lower, upper, special) index in the string

    let numChar = confirm('Click "OK" to comfirm numeric characters!');
    // console.log(numChar);
    let lowerChar = confirm('Click "OK" to comfirm lowercase characters!');
    // console.log(lowerChar);
    let upperChar = confirm('Click "OK" to comfirm uppercase characters!');
    // console.log(upperChar);
    let specialChar = confirm('Click "OK" to comfirm special characters!');
    // console.log(specialChar);


    //Password generator ends if none are comfirmed
    if (numChar === false && lowerChar === false && upperChar ===  false && specialChar === false) {
        alert('must select atleast one character type!');
        return;
    }
    // console.log(randomize(num))

    let passwordArr = []

    // created four loop used push character option to empty array to be randomly regenrated break indicates to stop loop

    for (let i = 0; i < charLen; i++){
        if(numChar === true){
            let randomChar = randomize(num)
            passwordArr.push(randomChar)
            if(passwordArr.length >= charLen){
                break;
            }
        }
        if(lowerChar === true){
            let randomChar = randomize(lower)
            passwordArr.push(randomChar)
            if(passwordArr.length >= charLen){
                break;
            }
        }
        if(upperChar === true){
            let randomChar = randomize(upper)
            passwordArr.push(randomChar)
            if(passwordArr.length >= charLen){
                break;
            }
        }
        if(specialChar === true){
            let randomChar = randomize(special)
            passwordArr.push(randomChar)
            if(passwordArr.length >= charLen){
                break;
            }
        }
}

// used "join method," creates and returns a new string by concatenating all of the elements in an array
    let password = passwordArr.join('')
    return password;
}
// Function used to get random element from an array
function randomize(arr) {
    console.log(arr)
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
// Id #generate element from html
let generateBtn = document.querySelector('#generate');

// function invoked writePassword / let statement declares a block-scoped local variable getPasswordOption

function writePassword() {
    let password = getPasswordOption();
    let passwordText = document.querySelector('#password');
    
        passwordText.value = password;
    }


generateBtn.addEventListener('click', writePassword);