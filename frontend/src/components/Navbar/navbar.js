import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import { Route, Redirect, Link } from "react-router-dom";
// import { Row, Col } from "antd";
// import MenuIcon from "@material-ui/icons/Menu";
// import LandingPage from "../LandingPage/landingpage";
import p4 from "../../Icons/p4.webp";
// import { Card } from "antd";
import "./footer.css";
import { Link } from "react-router-dom";
import LandingPage from "./../landingPage/landingPage";
import "./navbar.css";
// import { Row, Col } from "react-bootstrap";

class Navbar extends Component {
  // constructor(props) {
  //   super(props);

  // }
  state = {
    classes: makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    })),
    redirect: null,
  };

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <>
        <div
          style={{
            display: "block",
            height: "58px",
            width: "100%",
            // backgroundColor: "#1892e6",
          }}
        >
          <div
            id="navSticky"
            style={{
              position: "fixed",
              width: "100%",
              backgroundColor: "#fff",
              padding: "5px 15px",
              zIndex: "3",
              transition: "0.3s all ease",
              boxShadow: localStorage.getItem("userProfile")
                ? "0px 1px 10px -5px #777"
                : "",
              // backgroundColor: "#8dc63f",
            }}
          >
            <div className="row">
              <div className="col-5">
                <Link
                  style={{
                    color: "black",
                    fontWeight: "800",
                    fontFamily: "Georgia, serif",
                    display: "flex",
                  }}
                  to="/home"
                >
                  <div
                    style={{ fontFamily: "Sirin Stencil", fontSize: "28px" }}
                  >
                    PetGoHome
                  </div>
                  <img
                    src={p4}
                    style={{
                      width: "45px",
                      height: "45px",
                      marginLeft: "7px",
                    }}
                    alt=""
                  ></img>
                </Link>
              </div>
              <div
                className="col-7"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                {localStorage.getItem("userProfile") ? (
                  <>
                    <div className="navbar-buttons">
                      <Link
                        className="navbar-links"
                        style={{
                          color: "black",
                          fontWeight: "540",
                          fontFamily: "Georgia, serif",
                        }}
                        to="/home"
                      >
                        Home
                      </Link>
                    </div>
                    <div className="navbar-buttons" style={{ width: "205px" }}>
                      <Link
                        className="navbar-links"
                        style={{
                          color: "black",
                          fontWeight: "540",
                          fontFamily: "Georgia, serif",
                        }}
                        to="/lostorfound"
                      >
                        I Found Or Lost a Pet
                      </Link>
                    </div>
                    <div className="navbar-buttons" style={{ width: "120px" }}>
                      <Link
                        className="navbar-links"
                        style={{
                          color: "black",
                          fontWeight: "540",
                          fontFamily: "Georgia, serif",
                        }}
                        to="/search"
                      >
                        Search
                      </Link>
                    </div>
                    <div className="navbar-buttons" style={{ width: "150px" }}>
                      <Link
                        className="navbar-links"
                        style={{
                          color: "black",
                          fontWeight: "540",
                          fontFamily: "Georgia, serif",
                        }}
                        to="/prevdata"
                      >
                        Previous Data
                      </Link>
                    </div>
                  </>
                ) : (
                  ""
                )}

                {localStorage.getItem("userProfile") ? (
                  <div className="navbar-buttons">
                    <Link
                      className="navbar-links"
                      style={{
                        color: "black",
                        fontWeight: "540",
                        fontFamily: "Roboto",
                        // border: "2px solid #555",
                        // boxShadow:
                        //   "20px 20px 41px #808080, -20px -20px 41px #eee",
                        borderRadius: "10px",
                        marginLeft: "10px",
                      }}
                      to="/"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      Log Out
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="navbar-buttons">
                      <Link
                        className="navbar-links"
                        style={{
                          color: "black",
                          fontWeight: "540",
                          fontFamily: "Georgia, serif",
                        }}
                        to="/whomtocontact"
                      >
                        Contact
                      </Link>
                    </div>
                    <div className="navbar-buttons">
                      <Link
                        className="navbar-links"
                        style={{
                          color: "black",
                          fontWeight: "540",
                          fontFamily: "Georgia, serif",
                        }}
                        to="/stolenpets"
                      >
                        Stolen Pets
                      </Link>
                    </div>
                    <div
                      style={{
                        width: "120px",
                        padding: "3px 12px",
                        textAlign: "center",
                      }}
                    >
                      <Link
                        className="navbar-links"
                        style={{
                          color: "black",
                          fontWeight: "540",
                          fontFamily: "Roboto",
                          boxShadow:
                            "20px 20px 41px #808080, -20px -20px 41px #eee",
                          // border: "2px solid #555",
                          borderRadius: "10px",
                        }}
                        to="/login"
                      >
                        Login
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {this.props.location.pathname === "/" ? (
          <LandingPage props={this.props} />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default Navbar;
