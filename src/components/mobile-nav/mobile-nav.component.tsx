import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { ImCancelCircle } from "react-icons/im";
import { useSelector } from "react-redux";
import { scrollToElement } from "../../lib/helpers";
import { selectFirstVisit } from "../../redux/misc/misc.selector";

import "./mobile-nav.style.scss";

const MobileNav: React.FC = () => {
  const firstVisit = useSelector(selectFirstVisit);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = (id: string) => {
    scrollToElement(id);
    setShowMenu(!showMenu);
  };

  return (
    <div className={`mobile-nav ${firstVisit ? "mobile-nav--hide" : ""}`}>
      <HiOutlineMenuAlt4 onClick={toggleMenu} className="mobile-nav__button" />
      <div className={`mobile-nav__mobile-menu ${showMenu ? "mobile-nav__mobile-menu--show" : ""}`}>
        <div
          onClick={() => handleScroll("#work-section")}
          className="mobile-nav__mobile-menu-items"
        >
          work
        </div>
        <div
          onClick={() => handleScroll("#about-section")}
          className="mobile-nav__mobile-menu-items"
        >
          about
        </div>
        <div
          onClick={() => handleScroll("#contact-section")}
          className="mobile-nav__mobile-menu-items"
        >
          contact
        </div>
        <div className="mobile-nav__mobile-menu-items">
          <ImCancelCircle onClick={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
