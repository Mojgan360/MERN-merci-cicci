import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className=" landing ">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large purple-text text-darken-4">MERCI CICCI</h1>
          <p className="lead">
            Create a profile/portfolio for your pet/pets, share photo , posts
            and get help from other Pets lovers
          </p>

          <div className=" container row ">
            <div className="col s6">
              {" "}
              <Link
                to="/login"
                className="waves-effect waves-light btn-large  #5e35b1 deep-purple darken-1 lighten-3 "
              >
                Log In
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/signup"
                className="waves-effect waves-light btn-large  #5e35b1 deep-purple darken-1 lighten-3 "
              >
                sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
