import "./style.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div>
          <p className="attribution">
            Created by Jim Morales{" "}
            <a
              href="https://github.com/eljimmo"
              rel="noopener noreferrer"
              target="_blank"
            >
              
            </a>
          </p>
          <p className="attribution">
            Logos provided by{" "}
            <a
              href="https://github.com/eljimmo"
              rel="noopener noreferrer"
              target="_blank"
            >
              Clearbit
            </a>
          </p>
        </div>

        <a
          href="https://github.com/eljimmo"
          rel="noopener noreferrer"
          target="_blank"
          className="link"
        >
          <p>View source code</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
