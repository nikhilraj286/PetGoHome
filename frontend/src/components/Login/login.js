import React, { Component } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import backendServer from "../../webconfig";
import "./login.css";
import { Redirect } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: null,
      loginPassword: null,
      signupUsername: null,
      signupEmail: null,
      signupPassword: null,
    };
  }

  signIn = (e) => {
    e.preventDefault();
    if (this.state.loginEmail && this.state.loginPassword) {
      let data = {
        email: this.state.loginEmail,
        password: this.state.loginPassword,
      };
      console.log(data);
      axios
        .post(backendServer + "/admin/signin", data)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("userProfile", JSON.stringify(response.data));
            this.props.history.push("/home");
          }
        })
        .catch((err) => {
          window.alert("wrong credentials");
          console.log(err);
        });
    }
  };

  signUp = (e) => {
    e.preventDefault();
    if (
      this.state.signupUsername &&
      this.state.signupPassword &&
      this.state.signupEmail
    ) {
      let data = {
        username: this.state.signupUsername,
        password: this.state.signupPassword,
        email: this.state.signupEmail,
      };
      console.log(data);
      axios
        .post(backendServer + "/admin/signup", data)
        .then((response) => {
          console.log(response.data);
          if (response.status === 200) {
            localStorage.setItem("userProfile", JSON.stringify(response.data));
            this.props.history.push("/home");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    // console.log(this.state);
    return (
      <>
        {localStorage.getItem("userProfile") ? <Redirect to="/feed" /> : ""}
        {/* {JSON.stringify(this.state)} */}
        <div style={{ width: "50%", margin: "auto" }}></div>
        <div
          style={{
            margin: "auto",
            width: "35%",
            boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
            borderRadius: "10px",
            padding: "100px 0",
          }}
        >
          <div
            className="row"
            style={{
              width: "50%",
              margin: "10px auto 50px auto",
              textAlign: "center",
              border: "1px solid #bbb",
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "10px",
              fontSize: "18px",
            }}
          >
            <div
              className="col selectedTab"
              style={{ borderRight: "0.5px solid #ddd", padding: "12px 0" }}
              id="login"
              onClick={() => {
                document
                  .getElementById("loginBelow")
                  .classList.remove("hidden");
                document.getElementById("signupBelow").classList.add("hidden");
                document.getElementById("login").classList.add("selectedTab");
                document
                  .getElementById("signUp")
                  .classList.remove("selectedTab");
              }}
            >
              Login
            </div>
            <div
              className="col"
              style={{ borderLeft: "0.5px solid #ddd", padding: "12px 0" }}
              id="signUp"
              onClick={() => {
                document.getElementById("loginBelow").classList.add("hidden");
                document
                  .getElementById("signupBelow")
                  .classList.remove("hidden");
                document
                  .getElementById("login")
                  .classList.remove("selectedTab");
                document.getElementById("signUp").classList.add("selectedTab");
              }}
            >
              Sign up
            </div>
          </div>
          <div id="loginBelow">
            <form
              className="row g-3 needs-validation"
              noValidate
              onSubmit={this.signIn}
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput1"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    this.setState({ loginEmail: e.target.value });
                  }}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword1"
                  placeholder="Password"
                  onChange={(e) => {
                    this.setState({ loginPassword: e.target.value });
                  }}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div
                className="col-12"
                style={{ textAlign: "center", marginTop: "30px" }}
              >
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div id="signupBelow" className="hidden">
            <form
              className="row g-3 needs-validation"
              noValidate
              onSubmit={this.signUp}
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput2"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    this.setState({ signupEmail: e.target.value });
                  }}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput3"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    this.setState({ signupUsername: e.target.value });
                  }}
                />
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword2"
                  placeholder="Password"
                  onChange={(e) => {
                    this.setState({ signupPassword: e.target.value });
                  }}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div
                className="col-12"
                style={{ textAlign: "center", marginTop: "30px" }}
              >
                <button className="btn btn-primary" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
