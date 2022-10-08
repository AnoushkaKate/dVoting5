import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          Have more ideas for the school? Add your proposals {" "}
          <a
            className="profile"
            href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSftRxcR7W-iSxgk5Yrr9vvJ__Na2L-cu6sm4qNk2_vZNO7r7A/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          Share this to get more people involved!
        </p>
      </div>
    </div>
  </>
);

export default Footer;
