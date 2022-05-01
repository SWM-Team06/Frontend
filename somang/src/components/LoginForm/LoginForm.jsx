import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="board">
      <div className="flex"></div>
      <div className="container">
        <div className="box">
          <div className="heading">Somange</div>
          <form action="post" className="login-form">
            <div className="field">
              <input id="id" type="name" placeholder="id" />
              <label for="id">Id</label>
            </div>
            <div className="field">
              <input id="password" type="password" placeholder="password" />
              <label for="password">Password</label>
            </div>
            <button className="login-button" title="login">
              Log In
            </button>
          </form>
          <p>
            Don't have an account?&nbsp;
            <a className="signup" href="/signup">
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
}

export default LoginForm;
