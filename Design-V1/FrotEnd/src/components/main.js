import React, { Component } from "react";
import Navbar from "./Navbar/navbar";
import { Route } from "react-router-dom";
import Login from "./Login/login";
import Lost from "./Lost/lost";
import Home from "../components/Home/home";
import Maps from "./GoogleMaps/maps";
import FileUpload from "../components/Upload/upload";
import pdfGenerator from "./PDFgenerator/pdfgenerator";
import LandingPage from "./LandingPage/landingpage";

import WhomToContact from "./Info/WhomToContact";
import stolenpets from "./Info/stolenpets";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route path="/" component={Navbar} />
        <div>
          <Route path="/login" component={Login} />
          <Route path="/lost" component={Lost} />
          <Route path="/home" component={Home} />
          <Route path="/maps" component={Maps} />
          <Route path="/upload" component={FileUpload} />
          <Route path="/pdf" component={pdfGenerator} />
          <Route path="/landingpage" component={LandingPage} />
          <Route path="/whomtocontact" component={WhomToContact} />
          <Route path="/stolenpets" component={stolenpets} />
        </div>
      </div>
    );
  }
}

export default Main;
