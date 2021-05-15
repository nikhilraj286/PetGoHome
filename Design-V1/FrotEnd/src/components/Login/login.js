import { useState } from "react";
import "antd/dist/antd.css";
import { Image } from "antd";
import homeIcon from "../../Icons/p2.png";
import { Row, Col } from "antd";
import { Input } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import GoogleLogin from "react-google-login";
import axios from "axios";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const history = useHistory();
  const classes = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const grids = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const button = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const [username, setUsername] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showemail, setShowemail] = useState(false);

  const showGoogleSignIn = () => {
    return (
      <>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{
            marginTop: "5%",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h2 className="appSubHeadings">Sign in with your google account </h2>
        </Row>
        <Row
          style={{
            width: "200px",
            fontSize: "x-large",
            justifyContent: "flex-end",
            marginLeft: "30px",
            marginTop: "10%",
          }}
        >
          <GoogleLogin
            clientId="363955406428-i39idmlthf9itoi52qbdsm9l2e2kif8l.apps.googleusercontent.com"
            buttonText="Google Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Row>
      </>
    );
  };

  const signIn = () => {
    let data = {
      username,
      password,
    };
    axios
      .post(`http://localhost:8080/admin/signin`, data)
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem("loggedInType", "admin");
          sessionStorage.setItem("id", response.data._id);
          history.push("/home");
        }
      })
      .catch((err) => {
        window.alert("wrong credentials");
        console.log(err);
      });
  };

  const signUp = () => {
    let data = {
      username,
      password,
      emailId,
    };
    axios
      .post(`http://localhost:8080/admin/signin`, data)
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem("loggedInType", "admin");
          sessionStorage.setItem("id", response.data._id);
          window.alert("Sign up complete");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showSignInContent = () => {
    return (
      <>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ marginTop: "5%", textAlign: "center" }}
        >
          <h2 className="appSubHeadings">
            Sign in with your username and password
          </h2>
        </Row>
        <Grid container xs={12} spacing={1} alignItems="center">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              style={{ width: "30ch" }}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Grid>
        </Grid>

        {showemail ? (
          <>
            <br></br>
            <Grid container xs={12} spacing={1} alignItems="center">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Email Id"
                  style={{ width: "30ch" }}
                  variant="outlined"
                  onChange={(e) => {
                    setEmailId(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          ""
        )}
        <br></br>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <LockIcon />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Password"
              style={{ width: "30ch" }}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          spacing={1}
          style={{ marginTop: "7%", justifyContent: "center" }}
        >
          {showemail ? (
            <Button
              variant="contained"
              color="primary"
              onClick={signUp}
              className={button.button}
            >
              Sign Up
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={signIn}
              className={button.button}
            >
              Sign In
            </Button>
          )}
        </Grid>
        <Grid container style={{ marginTop: "5%", justifyContent: "center" }}>
          {!showemail ? "Need an Account?" : "Already Have an Account! "}
          <span
            style={{
              textDecoration: "Underline",
              color: "blue",
              marginLeft: "0.2%",
            }}
            onClick={() => {
              setEmailId("");
              setShowemail(!showemail);
            }}
          >
            {!showemail ? " Sign Up" : " Sign In"}
          </span>
        </Grid>
      </>
    );
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          Content
        </Col>

        <Col className="gutter-row" span={12}>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ height: "40%" }}
          >
            <img
              src={homeIcon}
              elevation={10}
              style={{ width: "70%", maxHeight: "100%", marginTop: "2%" }}
            />
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
              {showGoogleSignIn()}
            </Col>
            {/* <Divider orientation="vertical" flexItem /> */}
            <Col className="gutter-row" span={12}>
              {showSignInContent()}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
