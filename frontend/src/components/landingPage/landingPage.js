import { Component } from "react";
import landingImg from "./../images/wallpaper.jpg";
import "./landingPage.css";
import { FaLongArrowAltRight } from "react-icons/fa";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div>
          <div className="row">
            <div
              className="col"
              style={{ padding: "70px 10px 10px 50px", zIndex: "1" }}
            >
              <div
                className="mainHeader"
                style={{
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  fontSize: "72px",
                  // backgroundImage: "linearGradient(#777, #000)",
                  // backgroundClip: "text",
                  // WebkitTextFillColor: "transparent",
                }}
              >
                Lost your pet?
              </div>
              <div
                style={{
                  fontFamily: "Roboto",
                  fontSize: "36px",
                  paddingRight: "20px",
                }}
              >
                PetGoHome is a free information center for lost dogs, cats and
                any other pets all over USA.
              </div>
              <div
                style={{
                  fontFamily: "Roboto",
                  fontSize: "24px",
                  paddingLeft: "20px",
                  marginTop: "30px",
                }}
              >
                <div> - Submit your pet details if you lost your pet</div>
                <div>
                  {" "}
                  - Help us find other lost pets. Log in and report spotted pets
                </div>
              </div>
              <div style={{ margin: "40px 0", textAlign: "center" }}>
                <div
                  className="landing-btn"
                  onClick={() => {
                    this.props.props.history.push("/login");
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "700" }}>
                    Log in{" "}
                    <FaLongArrowAltRight style={{ marginLeft: "10px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <img
                style={{
                  width: "120%",
                  marginLeft: "-150px",
                  marginTop: "50px",
                }}
                src={landingImg}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
