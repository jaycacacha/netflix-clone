import React, { useState, useEffect } from "react";
import "./Nav.css";
import netflix_avatar from "./img/netflix_avatar.png";
import { withRouter } from "react-router-dom";

function Nav({ history }) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        onClick={() => {
          history.push("/");
        }}
      ></img>
      <img
        className="nav_avatar"
        src={netflix_avatar}
        alt="Netflix Avatar"
      ></img>
    </div>
  );
}

export default withRouter(Nav);
