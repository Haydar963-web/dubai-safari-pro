// import { useState } from "react";
import DubaiLogo from "../../images/logo.png";
import "./header.css";
import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = ({ toggle, setToggle }) => {
  // const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <Logo dubaiLogo={DubaiLogo} />
      <NavBar toggle={toggle} setToggle={setToggle} />
      <div
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        className="header-menu"
      >
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
    </header>
  );
};
export default Header;
