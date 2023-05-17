import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Emails from "./emails.component";
import Frontend from "./frontend.component";
import { ReactComponent as Codepen } from "../../assets/codepen.svg";
import { ReactComponent as Codesandbox } from "../../assets/codesandbox.svg";
import { ReactComponent as Figma } from "../../assets/figma.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Stackblitz } from "../../assets/stackblitz.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";

const Projects = () => {
  return (
    <div id="projects">
      <Tabs>
        <TabList>
          <h2>Projects</h2>
          <div>
            <Tab default={true}>Frontend</Tab>
            <Tab>HTML Emails</Tab>
          </div>
        </TabList>

        <TabPanel>
          <Frontend />
        </TabPanel>
        <TabPanel>
          <Emails />
        </TabPanel>
      </Tabs>

      <h3>Alternate Projects</h3>
      <div className="gridlayout4">
        <div>
          <div>
            <Codepen />
          </div>
          <h3>Codepen</h3>
          <p>
            Pure HTML, CSS, and Javascript practive with CSS Playgrounds and
            code snippets from larger projects. This is the foundation of the
            web and my process.
          </p>
          <a
            href="https://codepen.io/maverickcer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Pens /&gt;</h4>
          </a>
        </div>
        <div>
          <div>
            <Codesandbox />
          </div>
          <h3>CodeSandbox</h3>
          <p>
            CodeSandbox is my online IDE of choice for react projects and houses
            all of my in progress work. Be sure to check out the react rebuild
            for Callouts Evovled.
          </p>
          <a
            href="https://codesandbox.io/u/MaverickCER"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Sandboxes /&gt;</h4>
          </a>
        </div>
        <div>
          <div>
            <Stackblitz />
          </div>
          <h3>Stackblitz</h3>
          <p>
            Stackbliz is another online IDE that specilizes in developing
            projects in Angular.
          </p>
          <a
            href="https://stackblitz.com/@MaverickCER"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Profile /&gt;</h4>
          </a>
        </div>
        <div>
          <div>
            <Figma />
          </div>
          <h3>Figma</h3>
          <p>
            This is my editor of choice for all of my design projects.
            Everything you see on this portfolio was designed and built by yours
            truly.
          </p>
          <a
            href="https://www.figma.com/@MaverickCER"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Designs /&gt;</h4>
          </a>
        </div>
        <div>
          <div>
            <Youtube />
          </div>
          <h3>YouTube</h3>
          <p>
            Instead of talking to myself while trying to solve problems, I like
            to discuss them on youtube and give my viewers a live view of the
            rubber ducky method.
          </p>
          <a
            href="https://www.youtube.com/channel/UCkYSvi4dRFcsrSIbE5Sflmg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Videos /&gt;</h4>
          </a>
        </div>
        <div>
          <div>
            <Github />
          </div>
          <h3>GitHub</h3>
          <p>
            The home of all my personal repositories from Callouts Evovled, to
            LangSynth and beyond.
          </p>
          <a
            href="https://github.com/MaverickCER"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Repositories /&gt;</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
