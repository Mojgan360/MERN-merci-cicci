import React, { Fragment, useState } from "react";

const Login = () => {
  return (
    <Fragment>
      <div className="container row">
        <section className="content">
          <form action="">
            <h3>Login </h3>
            <br />

            <div>
              <input type="email" placeholder="email" />
            </div>
            <div>
              <input type="password" placeholder="Password1" />
            </div>

            <div className="row">
              <br />
              <button
                className="col s12 btn waves-effect waves-ligh #80d8ff light-blue accent-1 center-align"
                type="submit"
                name="action"
              >
                Log In
              </button>
            </div>
          </form>
        </section>
      </div>
    </Fragment>
  );
};

export default Login;
