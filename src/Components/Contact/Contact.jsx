import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import discord_icon from "../../assets/discord_icon.svg";
import loader from "../../assets/loader.gif";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  formData.append("access_key", "05a3ba1e-8079-4cfe-a676-d40f9d1e8773");

  // Check if email is empty
  const email = formData.get("email");
  if (!email) {
    alert("Please enter your email.");
    setStatusMessage("Email is required.");
    return;
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const result = await res.json();

    if (result.success) {
      alert(result.message);
      setStatusMessage("Your message has been sent successfully!");
      event.target.reset(); // Clear the form fields
    } else {
      setStatusMessage("Failed to send the message. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    setStatusMessage("Something went wrong. Please try again later.");
  }
};

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme-pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail-icon" />
              <p>
                <a href="mailto:gauravraj7011@gmail.com" target="blank">
                  gauravraj7011@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call-icon" />
              <p>
                <a href="tel:+917011920579" target="blank">
                  +91 7011920579
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location-icon" />
              <p>DELHI, INDIA</p>
            </div>
          </div>
          <div className="social-connects">
            <div className="social-connect">
              <a
                href="https://www.linkedin.com/in/gaurav-raj7011/"
                target="blank"
              >
                <img
                  src={linkedin_icon}
                  alt="linkedin_icon"
                  style={{ width: "50px" }}
                />
              </a>
            </div>
            <div className="social-connect">
              <a href="https://github.com/Gauravvgithub" target="blank">
                <img
                  src={github_icon}
                  alt="linkedin_icon"
                  style={{
                    width: "50px",
                    background: "white",
                    borderRadius: "50%",
                    border: "none",
                    outline: "none",
                  }}
                />
              </a>
            </div>
            <div className="social-connect">
              <a href="https://discord.com/channels/@gauravvraj" target="blank">
                <img
                  src={discord_icon}
                  alt="linkedin_icon"
                  style={{ width: "50px" }}
                />
              </a>
            </div>
          </div>
          <div className="loaders">
            <div className="loader">
              <img src={loader} alt="free_loader" style={{ width: "150px" }} />
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
