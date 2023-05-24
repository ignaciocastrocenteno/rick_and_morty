import React, {useState} from "react";
import styles from "../forms/Form.module.css";
import loginImage from "../assets/login-image.png";
import SubmitButton from "../validations/SubmitButton.jsx";
const {checkEmail, checkPassword} = require("../validations/validations.js");

export default function Form({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const emailErrorHandler = (event) => {
    const email = event.target.value;
    if (checkEmail(email)) {
      setUserData({...userData, email: email});
      setErrors({...errors, email: ""});
    } else {
      setUserData({...userData, email: ""});
      setErrors({...errors, email: "El email ingresado no es válido"});
    }
  };

  const passwordErrorHandler = (event) => {
    const password = event.target.value;
    if (checkPassword(password) && password.length < 35 && password !== "") {
      setUserData({...userData, password: password});
      setErrors({...errors, password: ""});
    } else {
      setUserData({...userData, password: ""});
      setErrors({
        ...errors,
        password:
          "La contraseña debe contar al menos una minúscula, una mayúscula, un dígito y caracter especial. Entre 6 y 10 caracteres",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.example}>
        <img src={loginImage} alt="" className={styles.formImage} />
        <form onSubmit={handleSubmit}>
          <div className={styles.formElementsWrapper}>
            <div className={styles.formElements}>
              <label htmlFor="adminEmail" className={styles.formInputText}>
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                id="adminEmail"
                className={styles.formInputField}
                onChange={emailErrorHandler}
              />
              {errors.email ? (
                <p className={styles.errorEmail}>{errors.email}</p>
              ) : null}
            </div>
            <div className={styles.formElements}>
              <label htmlFor="adminPassword" className={styles.formInputText}>
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                id="adminPassword"
                className={styles.formInputField}
                onChange={passwordErrorHandler}
              />
              {errors.password ? (
                <p className={styles.errorPassword}>{errors.password}</p>
              ) : null}
            </div>
            <SubmitButton userData={userData} />
          </div>
        </form>
      </div>
    </div>
  );
}
