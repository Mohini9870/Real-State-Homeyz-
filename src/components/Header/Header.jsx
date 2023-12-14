import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo.png" alt="logo" width={100} />
          <OutsideClickHandler onOutsideClick={()=>{ setMenuOpened(false)}}>
            <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
              <a href="">Residencies</a>
              <a herf="">Our Value</a>
              <a herf="">Contact Us</a>
              <a herf="">Get Started</a>
              <button className="button">
                <a herf="">Contact</a>
              </button>
            </div>
          </OutsideClickHandler>

          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
