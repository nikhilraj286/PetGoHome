import React, { Component } from "react";
import { Row, Col } from "antd";

export default function FooterComponent() {
  return (
    <footer id="footer" style={{ background: "#cccccc" }}>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ opacity: "0.8", justifyContent: "center" }}
      >
        <Col className="gutter-row" span={4}>
          <h2 className="widget_h_3">Latest from the site</h2>
          <ul>
            <li>
              <a href="https://petfbi.org/moving-here-are-some-tips-to-keep-your-dog-safe/">
                Moving? Here are Some Tips to Keep Your Dog Safe
              </a>
            </li>
            <li>
              <a href="https://petfbi.org/how-to-safely-store-household-chemicals-out-of-reach-of-your-pets-and-other-wildlife-animals/">
                How to Safely Store Household Chemicals Out of Reach of Your
                Pets and Other Wildlife Animals
              </a>
            </li>
            <li>
              <a href="https://petfbi.org/google-voice-scam-alert/">
                Google Voice Scam Alert!
              </a>
            </li>
          </ul>
        </Col>
        <Col className="gutter-row" span={4}>
          <h2 className="widget_h_3">Who We Are</h2>
          <p>
            PetGoHome is built in 2021 as a part of college project with an
            intension to help people with the help of pet databases. We begin in
            San jose and want to serve the entire United States.
          </p>
        </Col>
        <Col className="gutter-row" span={4}>
          {" "}
          <h2 className="widget_h_3">Donate</h2>
          <p>
            PetGoHome is a small group of dedicated volunteers and we need your
            support. If you think we are providing a useful service, please help
            us with a donation, no matter how small.
          </p>
        </Col>

        <Col className="gutter-row" span={4}>
          {" "}
          <h2 className="widget_h_3">Other</h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://petfbi.org/how-to-help/anyone-can-help/manual-for-pet-fbi-special-agents/"
          >
            Pet Alerts Signup
          </a>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <p>All content in this site by PetGoHome copyright (C)</p>
      </Row>
    </footer>
  );
}
