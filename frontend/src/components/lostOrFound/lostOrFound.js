import React from "react";
import "antd/dist/antd.css";
import "./lostOrFound.css";
import axios from "axios";
import backendServer from "../../webconfig";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { Component } from "react";
import {
  Col,
  Form,
  Row,
  ButtonGroup,
  ToggleButton,
  Button,
} from "react-bootstrap";
class LostOrFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radios: [
        { name: "Dog", value: "Dog" },
        { name: "Cat", value: "Cat" },
        { name: "Bird", value: "Bird" },
        { name: "Rabbit", value: "Rabbit" },
        { name: "Reptile", value: "Reptile" },
        { name: "Pig", value: "Pig" },
        { name: "Other", value: "Other" },
      ],
      petname: null,
      ownername: null,
      email: null,
      mobile: null,
      reporttype: null,
      date: null,
      pettype: null,
      description: null,
      picture: null,
      selected: null,
      breed: null,
      gender: null,
      address: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      latitude: null,
      longitude: null,
      mapCenter: {
        lat: 37.3352,
        lng: -121.8811,
      },
    };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        this.setState({ address });
        this.setState({
          mapCenter: latLng,
          latitude: latLng.lat,
          longitude: latLng.lng,
        });
      })
      .catch((error) => console.error("Error", error));
  };

  submitDetails = async () => {
    // window.alert("button clicked");
    let userProfile = JSON.parse(localStorage.getItem("userProfile"));
    let data = {
      pet_name: this.state.petname,
      ownerid: userProfile ? userProfile.userid : null,
      record_type: this.state.reporttype,
      pet_type: this.state.pettype,
      phone: this.state.mobile,
      email: this.state.email,
      missing_date: this.state.date,
      location: this.state.address,
      picture: this.state.picture,
      description: this.state.description,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      breed: this.state.breed,
      gender: this.state.gender,
    };
    axios
      .post(backendServer + "/reportLostPet", data)
      .then((response) => {
        console.log(response);
        window.alert("Report Created");
        // this.setState
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const googlemap = (
      <div id="googleMap">
        <div
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            zIndex: "1",
          }}
        >
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  style={{
                    width: "100%",
                    border: "1px solid #888",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <Map
          style={{
            marginTop: "40px",
            borderRadius: "5px",
            border: "1px solid #999",
          }}
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        >
          <Marker
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng,
            }}
          />
        </Map>
      </div>
    );
    return (
      <div style={{ paddingBottom: "100px" }}>
        {/* {JSON.stringify(this.state)} */}
        <div
          className="lostFound"
          style={{
            // padding: "15px 100px",
            width: "80%",
            margin: " 40px auto",
            boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
            borderRadius: "25px",
            overflow: "hidden",
            backgroungColor: "#f5f9fc",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "38px",
              fontWeight: "700",
              marginBottom: "30px",
              paddingTop: "10px",
              // fontFamily: "Sirin Stencil",
              height: "80px",
              backgroundColor: "#85a1b4",
            }}
          >
            Enter the details of your pet
          </div>
          <Form
            style={{
              padding: "2%",
              // fontFamily: "Sirin Stencil",
              fontSize: "20px",
            }}
          >
            <Row style={{ margin: "0" }}>
              <Col>
                <label style={{ color: "#000000", paddingBottom: "5px" }}>
                  Your Petname
                </label>
                <Form.Control
                  type="text"
                  placeholder="pet name"
                  onChange={(e) => {
                    this.setState({ petname: e.target.value });
                  }}
                />
              </Col>
              <Col>
                <label style={{ color: "#000000", paddingBottom: "5px" }}>
                  Your Name
                </label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  onChange={(e) => {
                    this.setState({ ownername: e.target.value });
                  }}
                />
              </Col>
            </Row>
            <Row style={{ margin: "0" }}>
              <Col>
                <label style={{ color: "#000000", paddingBottom: "5px" }}>
                  Email Address
                </label>
                <Form.Control
                  type="text"
                  placeholder="email"
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
              </Col>
              <Col>
                <label style={{ color: "#000000", paddingBottom: "5px" }}>
                  Contact Number
                </label>
                <Form.Control
                  type="number"
                  placeholder="Mobile"
                  onChange={(e) => {
                    this.setState({ mobile: e.target.value });
                  }}
                />
              </Col>
            </Row>
            <Row style={{ margin: "0" }}>
              <Col>
                <label style={{ color: "#000000", paddingBottom: "5px" }}>
                  Report Type
                </label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  onChange={(e) => {
                    this.setState({ reporttype: e.target.value });
                  }}
                >
                  <option>Choose...</option>
                  <option>Lost</option>
                  <option>Found</option>
                  <option>Stolen</option>
                </Form.Control>
              </Col>
              <Col>
                <label style={{ color: "#000000", paddingBottom: "5px" }}>
                  Missing Date
                </label>
                <Form.Control
                  type="date"
                  placeholder="Lost Date"
                  onChange={(e) => {
                    this.setState({ date: e.target.value });
                  }}
                />
              </Col>
            </Row>
            <Row style={{ margin: "0" }}>
              <Col>
                <label style={{ color: "#000000", paddingBottom: "5px" }}>
                  Breed
                </label>
                <Form.Control
                  type="text"
                  placeholder="name"
                  onChange={(e) => {
                    this.setState({ breed: e.target.value });
                  }}
                />
              </Col>
              <Col>
                <label style={{ color: "#000000", paddingBottom: "5px" }}>
                  Gender
                </label>
                <Form.Control
                  as="select"
                  defaultValue="Choose..."
                  onChange={(e) => {
                    this.setState({ gender: e.target.value });
                  }}
                >
                  <option>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Col>
            </Row>
            <Row style={{ margin: "0", justifyContent: "center" }}>
              <Col
                xs={9}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "#555",
                    marginBottom: "10px",
                    color: "#000000",
                    paddingBottom: "5px",
                  }}
                >
                  Type of Pet
                </div>
                <ButtonGroup toggle>
                  {this.state.radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      type="radio"
                      variant="secondary"
                      style={{
                        backgroundColor: "#8dc640",
                        borderRadius: "15px",
                        borderColor: "#8dc640",
                      }}
                      name="radio"
                      value={radio.value}
                      checked={this.state.pettype === radio.value}
                      onChange={(e) =>
                        this.setState({ pettype: e.currentTarget.value })
                      }
                    >
                      <div
                        style={{
                          display: "inline-block",
                          marginLeft: "10px",
                        }}
                      >
                        {radio.name}
                      </div>
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Col xs={9}>
                <div
                  style={{
                    textAlign: "center",
                    color: "#555",
                    marginBottom: "10px",
                    color: "#000000",
                    paddingBottom: "5px",
                  }}
                >
                  Description about your Pet
                </div>
                <div style={{ padding: "0 22px" }}>
                  <textarea
                    rows="5"
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      border: "1px solid #ddd",
                    }}
                    onChange={(e) => {
                      this.setState({ description: e.target.value });
                    }}
                  ></textarea>
                </div>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", textAlign: "center" }}>
              <Col xs={6}>
                <div style={{ color: "#000000", paddingBottom: "5px" }}>
                  Upload a Picture
                </div>
                <div
                  style={{
                    width: "300px",
                    height: "300px",
                    color: "#000",
                    border: "1px solid #bbb",
                    margin: "auto",
                    borderRadius: "5px",
                    marginBottom: "10px",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {this.state.picture ? (
                    <img
                      src={
                        "https://petgohome.s3-us-west-2.amazonaws.com/" +
                        this.state.picture
                      }
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                      alt=""
                    />
                  ) : (
                    <span style={{ color: "#fff" }}>.</span>
                  )}
                </div>
                <div>
                  <div>
                    <input
                      type="file"
                      id="myFile"
                      style={{ width: "50%" }}
                      onChange={async (e) => {
                        let formData = new FormData();
                        let imageName = e.target.files[0].name;
                        let file1 = e.target.files[0];
                        console.log(file1);
                        formData.append("myImage", file1);
                        for (var key of formData.entries()) {
                          console.log(key[0] + ", " + key[1]);
                        }
                        const config = {
                          headers: { "content-type": "multipart/form-data" },
                        };
                        let data = {
                          formD: formData,
                          conf: config,
                        };
                        console.log(data);
                        axios
                          .post(backendServer + "/uploadPic", formData)
                          .then((response) => {
                            console.log(response);
                            this.setState({
                              picture: imageName,
                            });
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                        // await this.props.uploadPic(data);
                        // if (this.props.uploadPicDetails !== 400) {
                        //   this.setState({
                        //     imageUrl: this.props.uploadPicDetails,
                        //     profilepic: null,
                        //   });
                        // }
                      }}
                    />
                  </div>
                </div>
              </Col>
              <Col
                xs={6}
                style={{
                  position: "relative",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    color: "#000000",
                    paddingBottom: "5px",
                    marginBottom: "20px",
                  }}
                >
                  Missing Location
                </div>
                <div
                  style={{
                    width: "300px",
                    height: "300px",
                    position: "absolute",
                    top: "12%",
                    color: "#000",
                    margin: "auto",
                    // border: "1px solid #bbb",
                  }}
                >
                  {googlemap}
                </div>
                <div></div>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Col xs={3} style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="secondary"
                  onClick={() => {
                    this.submitDetails();
                  }}
                  style={{
                    borderRadius: "13px",
                    borderColor: "#8dc63f",
                    backgroundColor: "#8dc63f",
                    width: "100%",
                    height: "50px",
                    fontSize: "20px",
                  }}
                >
                  Submit Details
                </Button>{" "}
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDKT5mLiGAU26aO5yCoHbQwHVOX2W5JHp0",
})(LostOrFound);
