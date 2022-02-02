// Sample code to console.log the fist inptu of password. Try tiping something in the first field

document.getElementById('password1').addEventListener('input', (e) => {
  const firstPassword = e.target.value; // Value of the password field
  console.log(firstPassword);
  let passwordLength = 'too short';
  let messageColor = 'red'; // Short password => red
  if (firstPassword.length >= 6) {
    passwordLength = 'adequate';
    messageColor = 'green'; // Long password => green
  }
  const passwordHelpElement = document.getElementById('passwordHelp');
  passwordHelpElement.textContent = `Length: ${passwordLength}`; // helper text
  passwordHelpElement.style.color = messageColor; // helper text color
});
// Checking password once it's entered
document.getElementById('password1').addEventListener('blur', (e) => {
  let pwValidity = '';
  const regex = /[0-9]/;
  if (!regex.test(e.target.value)) {
    // the password doesn't contain [0-9]]
    pwValidity = 'Password must contain a number';
  }
  document.getElementById('passwordHelp').textContent += ` ${pwValidity}`;
});

document.getElementById('password2').addEventListener('input', (e) => {
  const secPassword = e.target.value; // Value of the password field
  console.log(secPassword);
  let pw1 = document.getElementById('password1').value;
  let pw2 = document.getElementById('password2').value;
  console.log(pw1, pw2, 'this is line 32');
  if (pw1 !== pw2) {
    document.getElementById('passwordHelp').textContent =
      'Your passwords do not match';
  } else {
    document.getElementById('passwordHelp').textContent =
      'Your passwords match';
  }
});
