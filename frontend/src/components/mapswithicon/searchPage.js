import React, { useState, useEffect } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Button from "@material-ui/core/Button";
import { GoogleApiWrapper } from "google-maps-react";
import Paper from "@material-ui/core/Paper";
import { Col, Form, Row } from "react-bootstrap";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MapsWithIcon from "./mapswithicon";
import backendServer from "../../webconfig";
import axios from "axios";

function PlacesAuto(props) {
  const [address, setAddress] = React.useState("");

  const [date, setDate] = useState("30");
  const [miles, setMiles] = useState("5");
  const [reportType, setReportType] = useState("All");
  const [species, setSpecies] = useState("All");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  const [mapData, setMapData] = useState([{}]);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  const handleOnClick = () => {
    let data = {
      record_type: reportType,
      radius: miles,
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      missing_date: date,
      pet_type: species,
    };
    // console.log(data);
    axios
      .post(backendServer + "/searchPets", data)
      .then((response) => {
        console.log(response.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <div style={{ marginLeft: "10%", marginRight: "20%" }}>
      {/* {JSON.stringify(coordinates)} */}
      {/* {address}
      <br></br>
      {miles}
      <br></br>
      {reportType}
      <br></br>
      {species}
      <br></br>
      {date} */}
      <div
        style={{
          color: "#000000",
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "600",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        Search for lost or found pets
      </div>
      <Button
        variant="contained"
        //   onClick={handleOnClick}
        style={{
          width: "100%",

          height: "60px",
          marginLeft: "10px",
          borderRadius: "4px",
          fontSize: "18px",
          marginTop: "1%",

          backgroundColor: "#85a1b4",
        }}
      >
        Need to Enter a Lost or Found Report? Click Here
      </Button>
      <label
        style={{
          color: "#000000",
          fontSize: "27px",
          fontWeight: "bold",
          marginTop: "18px",
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        ENTER A LOCATION
      </label>
      <Paper
        elevation={15}
        style={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f5f9fc",
        }}
      >
        <Row>
          <Col>
            Location or zipcode
            <br></br>
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  {/* <p>Latitude: {coordinates.lat}</p>
                    <p>Longitude: {coordinates.lng}</p> */}

                  <input
                    {...getInputProps({ placeholder: "Type address" })}
                    style={{
                      width: "400px",
                      height: "40px",
                      borderRadius: "7px",
                    }}
                  />

                  <div>
                    {loading ? <div>...loading</div> : null}

                    {suggestions.map((suggestion) => {
                      const style = {
                        backgroundColor: suggestion.active
                          ? "#d3d3d3"
                          : "#f5f9fc",
                      };

                      return (
                        <div {...getSuggestionItemProps(suggestion, { style })}>
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </Col>
          <Col>
            Radius in miles
            <br></br>
            <input
              type="number"
              defaultValue="5"
              onChange={(e) => {
                setMiles(e.target.value);
              }}
              style={{
                width: "70px",
                height: "40px",
                borderRadius: "7px",
              }}
            />
          </Col>
        </Row>
      </Paper>
      <label
        style={{
          color: "#000000",
          fontSize: "27px",
          fontWeight: "bold",
          fontFamily: "Times New Roman, Times, serif",
          marginTop: "28px",
        }}
      >
        NARROW YOUR SEARCH
      </label>
      <Paper
        elevation={15}
        style={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f5f9fc",
        }}
      >
        <Row>
          <Col>
            <label style={{ color: "#000000", paddingBottom: "5px" }}>
              Report Type
            </label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={(e) => {
                setReportType(e.target.value);
              }}
            >
              <option>All</option>
              <option>Lost</option>
              <option>Found</option>
              <option>Stolen</option>
            </Form.Control>
          </Col>
          <Col>
            <label style={{ color: "#000000", paddingBottom: "5px" }}>
              Pet Species
            </label>
            <Form.Control
              as="select"
              defaultValue="Select"
              onChange={(e) => {
                setSpecies(e.target.value);
              }}
            >
              <option>All</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Bird</option>
              <option>Rabbit</option>
              <option>Reptile</option>
              <option>Pig</option>
              <option>Other</option>
            </Form.Control>
          </Col>
          <Col style={{ rowSpan: "2" }}>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">Within Past</FormLabel>
                <RadioGroup value={date} onChange={handleDateChange}>
                  <FormControlLabel
                    value="30"
                    control={<Radio />}
                    label="1 Month"
                  />
                  <FormControlLabel
                    value="90"
                    control={<Radio />}
                    label="3 Months"
                  />
                  <FormControlLabel
                    value="180"
                    control={<Radio />}
                    label="6 Months"
                  />
                  <FormControlLabel
                    value="365"
                    control={<Radio />}
                    label="1 Year"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </Col>
        </Row>

        <Button
          variant="contained"
          onClick={handleOnClick}
          style={{
            width: "60%",
            height: "55px",
            marginLeft: "10px",
            borderRadius: "13px",
            fontSize: "19px",
            backgroundColor: "#8dc63f",
          }}
        >
          Search
        </Button>
      </Paper>

      <Paper
        elevation={15}
        style={{
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f5f9fc",
          marginTop: "28px",
        }}
      >
        {console.log("this" + mapData)}
        <MapsWithIcon locations={mapData}></MapsWithIcon>
      </Paper>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDKT5mLiGAU26aO5yCoHbQwHVOX2W5JHp0",
})(PlacesAuto);
