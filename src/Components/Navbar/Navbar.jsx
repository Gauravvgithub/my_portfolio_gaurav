import React, { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <h1>Gaurav</h1>
      <img
        src={menu_open}
        onClick={openMenu}
        alt="menu-icon"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          className="nav-mob-close"
          src={menu_close}
          onClick={closeMenu}
          alt="menu-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home" style={{textDecoration:"none", color:"inherit"}}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="unerline_img" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" style={{textDecoration:"none", color:"inherit"}}>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? (
            <img src={underline} alt="unerline_img" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services" style={{textDecoration:"none", color:"inherit"}}>
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? (
            <img src={underline} alt="unerline_img" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work" style={{textDecoration:"none", color:"inherit"}}>
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="unerline_img" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" style={{textDecoration:"none", color:"inherit"}}>
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img src={underline} alt="unerline_img" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <AnchorLink className="anchor-link" offset={50} href="#contact" style={{textDecoration:"none", color:"inherit"}}>
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
};

export default Navbar;