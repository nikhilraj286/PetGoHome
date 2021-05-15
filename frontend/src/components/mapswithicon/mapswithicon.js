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

function Map() {
  const [locations, setLocations] = useState(null);
  const [selectedlocation, setSelectedLocation] = useState(null);
  const [state, setState] = useState("All");
  const [city, setCity] = useState("All");

  useEffect(() => {
    let data = {
      record_type: "Lost",
      radius: "10",
      latitude: "37.3352",
      longitude: "-121.8811",
      missing_date: "90",
      pet_type: "Dog",
    };
    // console.log(data);
    axios
      .post(backendServer + "/searchPets", data)
      .then((response) => {
        setLocations(response.data);
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
          defaultZoom={13}
          defaultCenter={{
            lat: Number(locations[0].latitude),
            lng: Number(locations[0].longitude),
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
                  String(location.pet_type) === "Dog"
                    ? "/dog.png"
                    : String(location.pet_type) === "Cat"
                    ? "/cat.png"
                    : String(location.pet_type) === "Bird"
                    ? "/bird.png"
                    : String(location.pet_type) === "Goat"
                    ? "/goat.png"
                    : String(location.pet_type) === "Horse"
                    ? "/horse.png"
                    : String(location.pet_type) === "Tortoise"
                    ? "/tortoise.png"
                    : String(location.pet_type) === "Rabbit"
                    ? "/rabbit.png"
                    : String(location.pet_type) === "Pig"
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
                      selectedlocation.picture
                    }
                    alt="petimage"
                    width="350"
                    height="300"
                  ></img>
                </div>

                <Card
                  title={
                    selectedlocation.pet_type +
                    " - " +
                    selectedlocation.record_type
                  }
                  style={{
                    fontFamily: "Sirin Stencil",
                    fontSize: "18px",
                  }}
                >
                  <h6>Breed : {selectedlocation.breed}</h6>
                  <h6>Gender : {selectedlocation.gender}</h6>
                  <h6>
                    Date : {String(selectedlocation.missing_date).substr(0, 10)}
                  </h6>
                  <h6>Owner Name : {selectedlocation.User.username}</h6>
                  <h6>Contact : {selectedlocation.phone}</h6>

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

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MapsWithIcon() {
  // const classes = useStyles();

  return (
    <div>
      <div style={{ marginBottom: "2%" }}></div>
      {/* --------------------------------------------------------------------------------
      -----------------------------END OF FORM---------------------------------------- */}
      <div style={{ width: "138vh", height: "80vh" }}>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GoogleURL}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
