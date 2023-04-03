/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black" style={{"display": "inline-block", "padding": "5px", "justifyContent": "center", "alignItems": "center"}}>
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/eljimmo"
                target="_blank"
              >
                Jim Morales
              </a>
            </li>
            <li>
              <a
                href="https://github.com/eljimmor"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://github.com/eljimmo"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://github.com/eljimmo"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/eljimmo"
            target="_blank"
          >
            Jim M
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
