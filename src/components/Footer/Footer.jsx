import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>HarryTech</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.youtube.com/" target={"blank"}>Youtube</a>
          <a href="https://www.google.com/" target={"blank"}>Google</a>
          <a href="https://medium.com/" target={"blank"}>Medium</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
