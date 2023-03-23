import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
            Leibniz Analytica
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
             Careers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
            Help Center
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
            Support
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
            Contact us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
            Security Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
            Privacy Policies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
            Accessibility
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
            Site map
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
            Give Feedback
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.leibnizanalytica.com/">
            Terms of Use
            </NavLink>
          </NavItem>
        </Nav>

      </Container>
    </footer>
  );
}

export default Footer;
