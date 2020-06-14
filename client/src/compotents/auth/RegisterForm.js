import React, { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertAction";
import PropTypes from "prop-types";

const RegisterForm = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("omsubmit");
    if (password !== password2) {
      setAlert("password is not match", "danger");
      setFormData({
        name: "",
        email: "",
        password: "",
        password2: "",
      });
    } else {
      const newUser = {
        name,
        email,
        password,
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post("/api/users/signup", body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <Fragment>
      <div className="container row">
        <section className="content">
          <form action="" onSubmit={onSubmit}>
            <h3>Sign Up </h3>
            <br />

            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>
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
            <div>
              <input
                type="password"
                placeholder="Password2"
                name="password2"
                value={password2}
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
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </section>
      </div>
    </Fragment>
  );
};
RegisterForm.prototype = {
  setAlert: PropTypes.func.isRequired,
};
export default connect(null, { setAlert })(RegisterForm);
