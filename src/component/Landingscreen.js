import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card"
        style={{
          width: "500px",
          height: "25rem",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          position: "relative",
        }}
      >
        <div className="card-body">
          <h5 className="card-title mt-10" style={{ marginTop: "50px" }}>
            Welcome To Popx
          </h5>
          <p className="card-text" style={{ marginTop: "20px" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-grid gap-2 mb-3" style={{ marginTop: "100px" }}>
            {/* Link to Registerscreen Page */}
            <Link
              to="/Registerscreen"
              className="btn btn-block btn-purple mb-2"
            >
              Create An Account
            </Link>
            {/* Link to Login Page */}
            <Link to="/loginscreen" className="btn btn-block btn-light-purple">
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
