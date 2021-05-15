import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Route, Redirect, Link } from "react-router-dom";
import { Row, Col } from "antd";
import MenuIcon from "@material-ui/icons/Menu";
import LandingPage from "../LandingPage/landingpage";
import p4 from "../../Icons/p4.webp";
import { Card } from "antd";
import "./footer.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
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
    return (
      <div>
        {/* <div>Nav bar</div> */}
        {this.state.redirect}
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "#807e7e" }}>
            {/* <IconButton
              edge="start"
              className={this.state.classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              {/* <MenuIcon /> */}
            {/* </IconButton>  */}

            <Typography variant="h6" className={this.state.classes.title}>
              <Link
                style={{
                  color: "black",
                  fontWeight: "800",
                  fontFamily: "Georgia, serif",
                }}
                to="/landingpage"
              >
                PetGoHome
              </Link>
              <img
                src={p4}
                style={{
                  width: "45px",
                  height: "45px",
                  marginLeft: "7px",
                }}
              ></img>
            </Typography>
            <Typography style={{ marginLeft: "2%" }}>
              <Link
                style={{
                  color: "black",
                  fontWeight: "540",
                  fontFamily: "Georgia, serif",
                }}
                to="/landingpage"
              >
                Feed
              </Link>
            </Typography>
            <Typography style={{ marginLeft: "1%" }}>
              <Link
                style={{
                  color: "black",
                  fontWeight: "540",
                  fontFamily: "Georgia, serif",
                }}
                to="/home"
              >
                I Found Or Lost a Pet
              </Link>
            </Typography>
            <Typography style={{ marginLeft: "1%" }}>
              <Link
                style={{
                  color: "black",
                  fontWeight: "540",
                  fontFamily: "Georgia, serif",
                }}
                to="/whomtocontact"
              >
                Contact
              </Link>
            </Typography>
            <Typography style={{ marginLeft: "1%" }}>
              <Link
                style={{
                  color: "black",
                  fontWeight: "540",
                  fontFamily: "Georgia, serif",
                }}
                to="/stolenpets"
              >
                Stolen Pets
              </Link>
            </Typography>

            <Typography style={{ marginLeft: "1%" }}>
              <Link
                style={{
                  color: "black",
                  fontWeight: "540",
                  fontFamily: "Georgia, serif",
                }}
                to="/login"
              >
                Logout
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        {/* ---------------------------------------------footer--------------------------------------------------
                
        ----------------------------------------------------------------------------------------------------- */}
      </div>
    );
  }
}

export default Navbar;
