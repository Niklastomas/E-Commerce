import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";
import { auth } from "../firebase";

function Register() {
  const history = useHistory();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (newUser.password === newUser.confirmPassword) {
      auth
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((auth) => {
          console.log(auth);
          if (auth) {
            history.push("/");
          }
        })
        .catch((error) => alert(error.message));
    } else {
      alert("You must enter the same password!");
    }

    setNewUser({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="register">
      <div className="register__container">
        <h1>Sign in</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={newUser.email}
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={newUser.password}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={newUser.confirmPassword}
          />

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <strong>Sign In</strong>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
