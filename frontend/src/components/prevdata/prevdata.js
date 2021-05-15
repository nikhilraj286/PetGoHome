import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { GoogleURL } from "../../config";
import backendServer from "../../webconfig";
import axios from "axios";
import { Card } from "antd";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "55ch",
//     },
//   },
// }));

function Prevdata() {
  const [locations, setLocations] = useState(null);
  const [selectedlocation, setSelectedLocation] = useState(null);
  const [state, setState] = useState("All");
  const [city, setCity] = useState("All");

  useEffect(() => {
    axios
      .post(backendServer + "/getAllLocations")
      .then((response) => {
        if (response.data.length > 0) {
          setLocations(response.data);
        }
      })

      .catch((err) => {
        console.log(err);
      });

    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedLocation(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <>
      {/* ------------------------------------------Search Fields------------------------- */}

      {/* --------------------------------------------------------------------------------------- */}

      {locations ? (
        <GoogleMap
          defaultZoom={4}
          defaultCenter={{
            lat: 37.0902,
            lng: -95.7129,
          }}
          // defaultOptions={{ styles: mapStyles }}
        >
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={{
                lat: Number(location.latitude),
                lng: Number(location.longitude),
              }}
              onClick={() => {
                setSelectedLocation(location);
              }}
              icon={{
                url:
                  String(location.type) === "Dog"
                    ? "/dog.png"
                    : String(location.type) === "Cat"
                    ? "/cat.png"
                    : String(location.type) === "Bird"
                    ? "/bird.png"
                    : String(location.type) === "Goat"
                    ? "/goat.png"
                    : String(location.type) === "Horse"
                    ? "/horse.png"
                    : String(location.type) === "Tortoise"
                    ? "/tortoise.png"
                    : String(location.type) === "Rabbit"
                    ? "/rabbit.png"
                    : String(location.type) === "Pig"
                    ? "/pig.png"
                    : "/other.png",

                scaledSize: new window.google.maps.Size(48, 48),
              }}

              // Size={new window.google.maps.Size(25, 25)}
            />
          ))}

          {selectedlocation && (
            <InfoWindow
              onCloseClick={() => {
                setSelectedLocation(null);
              }}
              position={{
                lat: Number(selectedlocation.latitude),
                lng: Number(selectedlocation.longitude),
              }}
            >
              <div>
                <div style={{ alignContent: "center" }}>
                  {" "}
                  <img
                    src={
                      "https://petgohome.s3-us-west-2.amazonaws.com/" +
                      selectedlocation.image
                    }
                    alt="petimage"
                    width="350"
                    height="300"
                  ></img>
                </div>

                <Card
                  title={
                    selectedlocation.type + " - " + selectedlocation.record_type
                  }
                  style={{
                    fontFamily: "Sirin Stencil",
                    fontSize: "18px",
                  }}
                >
                  <h6>Gender : {selectedlocation.gender}</h6>
                  <h6>Date : {selectedlocation.missing_date}</h6>
                  <h6>
                    {" "}
                    {selectedlocation.record_type + " - " + "location"}
                    <br></br>
                    {selectedlocation.location +
                      " (" +
                      selectedlocation.latitude +
                      ", " +
                      selectedlocation.longitude +
                      ")"}
                  </h6>
                </Card>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        ""
      )}
    </>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Prevdata));

export default function MapsWithIcon() {
  // const classes = useStyles();

  return (
    <>
      <div>
        <h5 style={{ textAlign: "center", marginTop: "10px" }}>
          Previous Lost and Found pet data.
        </h5>
      </div>
      <div>
        <div></div>
        {/* --------------------------------------------------------------------------------
      -----------------------------END OF FORM---------------------------------------- */}
        <div
          style={{
            width: "100vw",
            height: "80vh",
            padding: "0 80px",
          }}
        >
          <MapWrapped
            style={{ border: "1px solid #bbb" }}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GoogleURL}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </>
  );
}
