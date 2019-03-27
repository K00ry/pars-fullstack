import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as Arrow } from "../../svg/arrow.svg";

const ContactEN = () => (
  <Container>
    <Row>
      <div className="top-nav">
        <a href="#btn" id="back-to-top">
          {/*<img className="contact-arrow" src={logo} alt="Arrow" />*/}
          <Arrow />
          <br />
          Top
        </a>
      </div>
    </Row>

    <Row className="contact-en" data-scroll="toggle(.fromTopIn, .fromTopOut)">
      <Col sm={4} className="contact-en__line text-left">
        <h5 className="contact-en__line--h5">phone</h5>
        <a className="contact-en__line--a" href="tel:+989121180175">
          +98 (912)118-0175
        </a>
        <br />
        <a className="contact-en__line--a" href="tel:+989123368183">
          +98 (912)336-8183
        </a>
      </Col>
      <Col sm={4} className="contact-en__line text-left">
        <h5 className="contact-en__line--h5">E-mail</h5>

        <a className="contact-en__line--a" href="mailto:info@parsjadval.ir">
          info@parsjadval.ir
        </a>
      </Col>
      <Col sm={4} className="contact-en__line text-left">
        <h5 className="contact-en__line--h5">Address</h5>
        <div className="contact-en__line--a">
          Varamin, past the Valiasr Square, close to Jafar Abad Alley
        </div>
      </Col>
    </Row>
  </Container>
);

export default ContactEN;
