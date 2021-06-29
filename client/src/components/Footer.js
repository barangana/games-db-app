import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/barangana">github</a>{" "}
      <Link to="/">About</Link> <Link to="/">Terms</Link>
    </footer>
  );
}

export default Footer;
