import React, { useState } from "react";
import Modal from "simple-react-modal";
import Video from "../video/video.component";
import vsportfolio from "../../assets/vsportfolio.png";
import calloutsevolved from "../../assets/calloutsevolved.png";
import langsynth from "../../assets/langsynth.png";

const Frontend = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <>
      <div className="gridlayout1">
        <div>
          <img src={vsportfolio} alt="Visual Studio Code Inspired Portfolio" />
        </div>
        <div>
          <h3>VS Portfolio</h3>
          <p>
            Without the backend there wouldn’t be a frontend to develop. That is
            why for my first project I built a Visual Studio Code look alike.
            This program is a backend developer’s best friend.
          </p>
          <b>What problem it solves</b>
          <p>
            Built with a file structure that easily allows backend developers to
            showcase their work in an instantly recognizable development
            environment.
          </p>
          <b>Features</b>
          <p>98/100 performance, 100/100 SEO</p>
          <br />
          <p>React</p>
          <div className="gridlayout2">
            <button onClick={() => setModal1(!modal1)}>&lt; Video /&gt;</button>
            <a
              href="https://github.com/MaverickCER/VSPortfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Live Site /&gt;
            </a>
            <a
              href="https://github.com/MaverickCER/VSPortfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
          </div>
          <Modal
            className="projectModal"
            containerClassName="projectModel__inner"
            closeOnOuterClick={true}
            show={modal1}
            onClose={() => setModal1(!modal1)}
          >
            <div>
              <button onClick={() => setModal1(!modal1)} className="closeModal">
                X
              </button>
              <Video source="https://www.youtube.com/embed/l34z2rXUW94" />
            </div>
          </Modal>
        </div>
      </div>
      <div className="gridlayout3">
        <div>
          <h3>Callouts Evolved</h3>
          <p>
            Improve video game communication by making it more accesible, more
            reliable, and more efficient. This website helps disabled gamers
            communicate more efficiently in end game or competitive content.
          </p>
          <b>What problem it solves</b>
          <p>
            Allows non-traditional gamers to form teams and complete end game
            content that they otherwise would not be able to access in
            mic-required gaming communities.
          </p>
          <br />
          <p>
            Version 1.0: HTML5, CSS3, Jquery
            <br />
            Version 2.0: React, Redux
            <br />
            All: Firebase, Web Speech API
          </p>
          <div className="gridlayout2">
            <button onClick={() => setModal2(!modal2)}>&lt; Video /&gt;</button>
            <a
              href="https://github.com/MaverickCER/CalloutsEvolved"
              rel="noopener noreferrer"
            >
              &lt; Live Site /&gt;
            </a>
            <a
              href="https://github.com/MaverickCER/CalloutsEvolved"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
          </div>
          <Modal
            className="projectModal"
            containerClassName="projectModel__inner"
            closeOnOuterClick={true}
            show={modal2}
            onClose={() => setModal2(!modal2)}
          >
            <div>
              <button onClick={() => setModal2(!modal2)} className="closeModal">
                X
              </button>
              <Video source="https://www.youtube.com/embed/l34z2rXUW94" />
            </div>
          </Modal>
        </div>
        <div>
          <img
            src={calloutsevolved}
            alt="Real time alternative communication for disabled gamers"
          />
        </div>
      </div>
      <div className="gridlayout1">
        <div>
          <img
            src={langsynth}
            alt="Language learning app powered by speech technologies"
          />
        </div>
        <div>
          <h3>LangSynth</h3>
          <p>
            Learn to speak any number languages at your pace and as
            inexpensively as possible! This site memics high end features from
            other language learning platforms by incorperating the Web Speech
            API and Google’s Translation API.
          </p>
          <b>What problem it solves</b>
          <p>
            The end result allows users indicate what they want to say in
            another language through speech to text, then when their input is
            translated the site speaks the translated output and provides the
            user with a chance to practice the phrase.
          </p>
          <br />
          <p>Angular, TypeScript</p>
          <div className="gridlayout2">
            <button onClick={() => setModal3(!modal3)}>&lt; Video /&gt;</button>
            <a
              href="https://github.com/MaverickCER/LangSynth"
              rel="noopener noreferrer"
            >
              &lt; Live Site /&gt;
            </a>
            <a
              href="https://github.com/MaverickCER/LangSynth"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
          </div>
          <Modal
            className="projectModal"
            containerClassName="projectModel__inner"
            closeOnOuterClick={true}
            show={modal3}
            onClose={() => setModal3(!modal3)}
          >
            <div>
              <button onClick={() => setModal3(!modal3)} className="closeModal">
                X
              </button>
              <Video source="https://www.youtube.com/embed/l34z2rXUW94" />
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Frontend;
