import { Col, Row } from "antd";
import { Container } from "reactstrap";
import emailjs from "emailjs-com";
import { Button } from '@mantine/core';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r26azg2",
        "template_joii25r",
        e.target,
        "user_Ok12WTP0cvyrzSFOEutop"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="ContactMe" id="contact">
      <hr
        className="divider"
        style={{
          margin: "auto"
        }}
      />
      <Container>
        <Col>
          <Row>
            <Col>
              <Row>
                <Col md="auto" className="contact-logo">
                </Col>
                <Col md="auto">
                  <Row className="contact-heading">Email</Row>
                  <Row className="contact-value">jsmov@proton.me</Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col md="auto" className="contact-logo">
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col>
          <div className="form-group">
            <form onSubmit={sendEmail}>
              <div class="row">
                <div class="form-group name1 col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                  />
                </div>

                <div class="form-group name1 col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-md"
                    id="email"
                    placeholder="Your email address"
                    name="email"
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control form-control-md"
                id="discussion-title"
                placeholder="Enter the discussion title"
                name="subject"
              />
              <br />
              <textarea
                className="form-control"
                name="message"
                id="message"
                style={{ height: 100 }}
                placeholder="Write your message"
              ></textarea>
              <br />

              <Button 
                            variant="outline"

                            

              >
                Send Message Now
              </Button>
              
            </form>
          </div>
        </Col>
      </Container>
    </div>
  );
}