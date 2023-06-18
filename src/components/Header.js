import React from "react";
import { FacebookOutlined, Twitter } from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <div className="headerContainer bg-success">
        <div className="logo">Falmengo</div>
        <div className="nav-links">
          <a href="">Home</a>
          <a href="">Projects</a>
          <a href="">Blog</a>
          <a href="">Gallery</a>
          <a href="">Contact</a>
        </div>
        <div className="header-icons">
          <FacebookOutlined fontSize="large" />
          <Twitter fontSize="large" />
        </div>
      </div>
    </>
  );
};

export default Header;
