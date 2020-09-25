import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign in</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={user.email}
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={user.password}
          />

          <button type="submit">Sign in</button>
        </form>
        <p>
          Dont have an Account?{" "}
          <Link to="/register">
            <strong>Register</strong>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
