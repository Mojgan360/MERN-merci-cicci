import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className="container row">
        <section className="content">
          <form action="" onSubmit={onSubmit}>
            <h3>Login </h3>
            <br />

            <div>
              <input
                type="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div className="row">
              <br />
              <button
                className="col s12 btn waves-effect waves-ligh #80d8ff light-blue accent-1 center-align"
                type="submit"
                name="action"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="my-1">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </section>
      </div>
    </Fragment>
  );
};

export default Login;
