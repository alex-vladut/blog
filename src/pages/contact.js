import React from "react";

import { Layout } from "../components/layout";

import "./contact.css";

const Contact = () => (
  <Layout>
    <div className="contact-background" />
    <div className="contact-content">
      <div>
        <h2 className="contact-title">
          <span className="has-secondary-color">Cluj-Napoca,</span> Romania
        </h2>
        <p>22 Main Street, Cluj-Napoca, 40000</p>
      </div>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="subject" placeholder="Subject (Optional)" />
        <textarea
          placeholder="Message"
          name="your-message"
          cols="40"
          rows="6"
        />
        <button>Contact us</button>
      </form>
    </div>
  </Layout>
);

export default Contact;
