import React from "react";
import axios from "axios";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import backendServer from "../../webconfig";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    axios
      .post(backendServer + "/getLocations")
      .then((response) => {
        if (response.data.length > 0) {
          let values = Array(response.data.length).fill(0);
          this.setState({ locations: response.data, values: values });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state);
    let cards = [];
    if (this.state.locations) {
      this.state.locations.forEach((item) => {
        cards.push(
          <>
            <div
              style={{
                width: "70%",
                margin: "auto",
                border: "1px solid #bbb",
                padding: "30px",
              }}
            >
              <div>
                <div>Lost Location: {item.location}</div>
              </div>
              <Row style={{ margin: " 30px 0", minHeight: "350px" }}>
                <Col xs={6}>
                  <div>
                    <img
                      style={{ maxWidth: "449px", width: "100%" }}
                      src={
                        "https://petgohome.s3-us-west-2.amazonaws.com/" +
                        item.image
                      }
                      alt=""
                    ></img>
                  </div>
                </Col>
                <Col xs={6}>
                  <div
                    style={{
                      position: "absolute",
                      width: "30%",
                      height: "51%",
                    }}
                  >
                    <Map
                      zoom={10}
                      google={this.props.google}
                      initialCenter={{
                        lat: item.latitude,
                        lng: item.longitude,
                      }}
                    >
                      <Marker
                        position={{
                          lat: item.latitude,
                          lng: item.longitude,
                        }}
                      />
                    </Map>
                  </div>
                </Col>
              </Row>
            </div>
          </>
        );
      });
    }
    return (
      <>
        {localStorage.getItem("userProfile") ? "" : <Redirect to="/" />}
        {cards}
      </>
    );
  }
}

// export default Home;
export default GoogleApiWrapper({
  apiKey: "AIzaSyDKT5mLiGAU26aO5yCoHbQwHVOX2W5JHp0",
})(Home);
