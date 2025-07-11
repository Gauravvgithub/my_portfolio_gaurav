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
            <div className="social-connect">
              <a
                href="https://wa.me/917011920579?text=Hello!"
                target="blank"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  fill="none"
                  viewBox="0 0 24 24"
                  style={{ color: "#25D366", backgroundColor:"white", borderRadius:"10px" }}
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="loaders">
            <div className="loader">
              <img src={loader} alt="free_loader" style={{ width: "150px" }} />
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112216.22150223804!2d77.02581129251901!3d28.48686623919294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1bd6be37ea9%3A0x9800d4b5d8530f44!2sSouth%20Delhi%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1752244027038!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0", borderRadius: "20px" }}
              loading="lazy"
            ></iframe>
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
