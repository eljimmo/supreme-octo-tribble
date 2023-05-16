import React from "react";
import emailjs, { init } from "emailjs-com";
init("user_9jLdO8H26hYMcdiuTRjOZ");

const Contact_Components = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vfgy2ev",
        "template_02g4929",
        e.target,
        "user_9jLdO8H26hYMcdiuTRjOZ"
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you for your time. I will reply as soon as possible!");
        }
      })
      // Handle errors here however you like
      .catch((err) =>
        console.error(
          "Failed to send feedback. Error: ",
          err,
          process.env.REACT_APP_EMAILJS_USERID
        )
      );
  }

  return (
    <div id="contact">
      <div className="gridlayout1 start">
        <div>
          <h2>Contact</h2>
          <p>
            Drop a message, let’s connect, will reach out as soon as possible.
          </p>
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="grid2">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                id="name"
                type="text"
                name="user_name"
                placeholder="Please enter your full name"
                autoComplete="off"
              />
              <br />
              <label htmlFor="email">Email:</label>
              <br />
              <input
                id="email"
                type="email"
                name="user_email"
                placeholder="Please enter your email address"
                autoComplete="off"
              />
            </div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="user_message"
              placeholder="Please enter your message"
              autoComplete="off"
            />
            <button type="submit" value="Send">
              &lt; Send /&gt;
            </button>
          </form>
        </div>
        <div>
          <h2>CONNECT</h2>
          <p>Please feel free to also reach out on other platforms.</p>
          <div className="grid3">
            <a href="https://www.linkedin.com/in/maverickcer/">
              <h3>LINKEDIN</h3>
              <p>Connect with me</p>
            </a>
            <a href="https://twitter.com/MaverickCER">
              <h3>TWITTER</h3>
              <p>Check out project announcements</p>
            </a>
            <a href="https://www.reddit.com/user/maverickcer">
              <h3>REDDIT</h3>
              <p>Join my subreddits</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_Components;
