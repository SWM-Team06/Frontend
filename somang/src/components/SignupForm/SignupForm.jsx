import React from "react";
import "./SignupForm.css";

function SignupForm() {
  return (
    <div className="borad">
      <div className="flex"></div>
      <div class="container">
        <div class="box">
          <div class="heading">Somange</div>
          <div className="subtext">
            Sing up to see photos and videoes <br /> from your friends.
          </div>
          <form action="post" class="login-form">
            <div class="field">
              <input id="id" type="name" placeholder="id" />
              <label for="id">Id</label>
            </div>
            <div class="field">
              <input id="team_name" type="name" placeholder="team_name" />
              <label for="team_name">Team Name</label>
            </div>
            <div class="field">
              <input id="project_name" type="name" placeholder="project_name" />
              <label for="project_name">Project Name</label>
            </div>
            <div class="field">
              <input id="password" type="password" placeholder="password" />
              <label for="password">Password</label>
            </div>
            <button class="login-button" title="login">
              Sign up
            </button>
          </form>
        </div>
        <div className="box">
          <p>
            Have an account?&nbsp;
            <a class="login" href="/login">
              Log in
            </a>
          </p>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
}

export default SignupForm;
