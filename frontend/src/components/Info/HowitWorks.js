import React, { useState, useEffect } from "react";
import background from "../../Icons/back.jpeg";
import Button from "@material-ui/core/Button";
import fb from "./../../Icons/fb.png";
import reunite from "./../../Icons/reunite.png";
import map from "./../../Icons/map.png";

export default function HowItWorks() {
  return (
    <div>
      <div style={{ verticalAlign: "middle" }}>
        <div
          style={{
            backgroundImage: `url(${background})`,
            width: "100%",
            height: "290px",
          }}
        >
          <h1
            style={{
              padding: "18px",
              fontFamily: "Sirin Stencil",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "75px",
            }}
          >
            How to Find your Pet <br></br>with PetGoHome
          </h1>
        </div>
      </div>
      {/* -----------------Header--------------------_ */}
      <div>
        <table style={{ width: "70%", marginLeft: "10%" }}>
          <tr>
            <td style={{ paddingLeft: "7%" }}>
              <img src={fb}></img>
            </td>
            <td>
              <img src={map} style={{ width: "250px", height: "250px" }}></img>
            </td>
            <td>
              <img src={reunite}></img>
            </td>
          </tr>
          <tr style={{ alignText: "Center", marginTop: "0px" }}>
            <td style={{ textAlign: "Center" }}>
              {" "}
              <h2 style={{ color: "#8dc63f", fontWeight: "700" }}>Post</h2>
              <p>
                Post to social media <br></br>for a better speread of
                information.
                <br></br> Add your pet to our lost &amp; found.
              </p>
            </td>
            <td style={{ textAlign: "Center" }}>
              <h2 style={{ color: "#8dc63f", fontWeight: "700" }}>Location</h2>
              <p>
                Share and let others know <br></br>the precise location where
                the pet is lost or found.
              </p>
            </td>
            <td style={{ textAlign: "Center" }}>
              <h2 style={{ color: "#8dc63f", fontWeight: "700" }}>Reunite</h2>
              <p>
                Get your pet home sooner<br></br> with PetGoHome.
              </p>
            </td>
          </tr>
        </table>
      </div>
      {/* ---------------------------------- row two icons --------------------------------------_ */}
      <div style={{ backgroundColor: "#e4eaee" }}></div>
    </div>
  );
}
