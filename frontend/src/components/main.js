import React, { Component } from "react";
import Navbar from "./Navbar/navbar";
import { Route } from "react-router-dom";
import Login from "./Login/login";
// import Lost from "./Lost/lost";
import LostOrFound from "./lostOrFound/lostOrFound";
// import Maps from "./GoogleMaps/maps";
// import FileUpload from "../components/Upload/upload";
// import pdfGenerator from "./PDFgenerator/pdfgenerator";
import Home from "./home/home";
import WhomToContact from "./Info/WhomToContact";
import stolenpets from "./Info/stolenpets";
import mapswithicon from "./mapswithicon/mapswithicon";

import Convert from "./convert/convertolatlng";
import feed from "./Feed/feed";
import PetLocation from "./Feed/petlocation";
import HowItWorks from "./Info/HowitWorks";
import PdfGenerator from "./Feed/pdfgenerator";
import SearchComponent from "./mapswithicon/searchPage";
import Prevdata from "./prevdata/prevdata";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route path="/" component={Navbar} />
        <div>
          <Route path="/login" component={Login} />
          {/* <Route path="/lost" component={Lost} /> */}
          <Route path="/lostorfound" component={LostOrFound} />
          {/* <Route path="/maps" component={Maps} /> */}
          {/* <Route path="/upload" component={FileUpload} /> */}
          {/* <Route path="/pdf" component={pdfGenerator} /> */}
          <Route path="/home" component={feed} />
          <Route path="/whomtocontact" component={WhomToContact} />
          <Route path="/stolenpets" component={stolenpets} />
          <Route path="/mapswithicon" component={mapswithicon} />
          <Route path="/convert" component={Convert} />
          <Route path="/feed" component={feed} />
          <Route path="/petlocation" component={PetLocation} />
          <Route path="/howitworks" component={HowItWorks} />
          <Route path="/pdfgenerator" component={PdfGenerator} />
          <Route path="/search" component={SearchComponent} />
          <Route path="/prevdata" component={Prevdata} />
        </div>
      </div>
    );
  }
}

export default Main;
