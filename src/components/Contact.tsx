import React, { useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (name && email && message) {
      emailjs
        .send("your_service_id", "your_template_id", { name, email, message }, "your_public_key")
        .then(() => {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Email invio fallito:", error);
        });
    }
  };

  // Aggiungi qui i tuoi link dei social
  const socialLinks = {
    github: "https://github.com/tuousername",
    linkedin: "https://linkedin.com/in/tuousername",
    instagram: "https://instagram.com/tuousername",
    email: "mailto:tua@email.com",
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <form onSubmit={sendEmail} className="contact-form">
            <div className="form-flex">
              <input
                required
                type="text"
                className="name-field"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                required
                placeholder="Email / Phone"
                className="name-field"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <textarea
              required
              id="outlined-multiline-static"
              placeholder="Send me any inquiries or questions"
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
            {success && <p>Email inviata con successo! ✅</p>}
          </form>

          {/* Social Media Buttons */}
          <div className="social-buttons">
            <h3>Or connect with me on:</h3>
            <div className="social-icons">
              <Button
                variant="contained"
                href={socialLinks.github}
                target="_blank"
                startIcon={<GitHubIcon />}
                className="social-button github"
              >
                GitHub
              </Button>
              <Button
                variant="contained"
                href={socialLinks.linkedin}
                target="_blank"
                startIcon={<LinkedInIcon />}
                className="social-button linkedin"
              >
                LinkedIn
              </Button>
              <Button
                variant="contained"
                href={socialLinks.instagram}
                target="_blank"
                startIcon={<InstagramIcon />}
                className="social-button instagram"
              >
                Instagram
              </Button>
              <Button
                variant="contained"
                href={socialLinks.email}
                target="_blank"
                startIcon={<EmailIcon />}
                className="social-button email"
              >
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
