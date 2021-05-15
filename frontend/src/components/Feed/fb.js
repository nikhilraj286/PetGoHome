import React from "react";

import { Container, Segment } from "semantic-ui-react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";

function Fb(props) {
  var str =
    "https://petgohome.s3-us-west-2.amazonaws.com/" +
    String(props.location.picture);
  return (
    <div>
      <Container>
        <Segment>
          <div>
            <h5 style={{ fontFamily: "Sirin Stencil" }}>
              Share on social media to help the<br></br> owner reach this{" "}
              {props.location.record_type} pet.
            </h5>
            <table
              style={{ marginLeft: "60px", width: "80%", marginTop: "10px" }}
            >
              <tr>
                <td>
                  <FacebookShareButton
                    url={str}
                    quote={`Hello Everyone,
                              I have ${props.location.record_type} a pet ${
                      props.location.pet_type
                    }.
                              Below are the details 
                              Location : ${props.location.location}
                              Date     : ${String(
                                props.location.missing_date
                              ).substr(0, 10)}
                              If anyone ${
                                String(props.location.record_type) === "Lost"
                                  ? "Found"
                                  : "Lost"
                              } this pet, please contact me.`}
                    hashtag={
                      "#" +
                      props.location.record_type +
                      "_" +
                      props.location.type
                    }
                  >
                    <FacebookIcon logoFillColor="white"></FacebookIcon>
                  </FacebookShareButton>
                </td>
                <td>
                  <WhatsappShareButton
                    title={`Hello Everyone,
                      I have ${props.location.record_type} a pet ${
                      props.location.pet_type
                    }.
                      Below are the details 
                      Location : ${props.location.location}
                      Date     : ${String(props.location.missing_date).substr(
                        0,
                        10
                      )}
                      If anyone ${
                        String(props.location.record_type) === "Lost"
                          ? "Found"
                          : "Lost"
                      } this pet, please contact me.`}
                    url={str}
                  >
                    <WhatsappIcon logoFillColor="white"></WhatsappIcon>
                  </WhatsappShareButton>
                </td>
              </tr>
            </table>
          </div>
        </Segment>
      </Container>
    </div>
  );
}
export default Fb;
