// * Email RegEx []
function checkEmail(email) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

// * Password RegEx
/* [8 to 15 characters which contain at least one lowercase letter, 
    one uppercase letter, one numeric digit, and one special character] */
function checkPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/.test(
    password
  );
}

module.exports = {
  checkEmail,
  checkPassword,
};
