console.log('this is a sanity check')

//Date in nav-bar
const today = new Date()
//get the date id
document.getElementById('date').innerHTML = today


//to input a form
//grab the element in which we are putting the form

//create the form element

//create

// Sample code to console.log the fist inptu of password. Try tiping something in the first field

document.getElementById("password1").addEventListener("input", e => {
  const firstPassword = e.target.value; // Value of the password field
  console.log(firstPassword);
  let passwordLength = "too short";
  let messageColor = "red"; // Short password => red
  if (firstPassword.length >= 6) {
    passwordLength = "adequate";
    messageColor = "green"; // Long password => green
  }
  const passwordHelpElement = document.getElementById("passwordHelp");
  passwordHelpElement.textContent = `Length: ${passwordLength}`; // helper text
  passwordHelpElement.style.color = messageColor; // helper text color
});
// Checking password once it's entered
document.getElementById("password1").addEventListener("blur", e => {
  let pwValidity = "";
  const regex = /[0-9]/;
  if (!regex.test(e.target.value)) {
    // the password doesn't contain [0-9]]
    pwValidity = "Password must contain a number";
  }
  document.getElementById("passwordHelp").textContent +=` ${pwValidity}`;
});

document.getElementById("password2").addEventListener("input", e => {
  const secPassword = e.target.value; // Value of the password field
  console.log(secPassword);
  let pw1 = document.getElementById("password1").value;
  let pw2 = document.getElementById("password2").value;
  console.log(pw1, pw2, "this is line 32");
  if (pw1 !== pw2) {
    document.getElementById("passwordHelp").textContent = "Your passwords do not match";
  } else {
    document.getElementById("passwordHelp").textContent = "Your passwords match";
  }
});




let cc = console.log
function BankAccount(name, balance){

  this.name = name;
  this.balance = balance;//100

  this.describe = function describe(){
    cc('This is checking!')
  }

  this.deposit = function deposit(value){//500
    console.log('Your new balance is: $', this.balance + value)
  }

  this.transfer = function transfer(amount, accountHolder){//(num, str)
    if(this.balance < amount){
      console.log('Insufficient fund')
    }else{
    console.log(this.balance - amount)//50
    }
  }
}

const billy = new BankAccount('Bill', 100)
cc(billy.balance)
let value = 500;
cc(billy.deposit(value))
 let accountHolder = 'Fay';
 let amount = 50;
billy.describe();
console.log(billy.transfer(amount, accountHolder))
console.log(billy)

// let describe = "Checking account";
// let depositAmount = 300;

// describe();


// const faribaDk = new Account('Fariba', 100)
// console.log(faribaDk)

// const rosieLove = new Account('Rosie', 800)
// console.log(rosieLove)
