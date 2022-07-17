import "./navbar.css";

import { logos } from "../../utils/assetsImport";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactBtn from "../ContactBtn/ContactBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  //nav scroll handling
  const [isScrolled, setScrolled] = useState(false);
  const handleScroll = (e) => {
    if (document.documentElement.scrollTop !== 0) {
      setScrolled(true);
    } else setScrolled(false);
  };

  //nav menu open
  const [isOpen, setOpen] = useState(false);

  //nav links handling
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const links = [
    {
      label: "Acceuil",
      to: "/",
    },
    {
      label: "Nos Activités",
      to: "/nosactivites",
    },
    {
      label: "Nos Realisations",
      to: "/nosrealisations",
    },
  ];
  const renderLinks = () => {
    return links.map(({ label, to }, i) => (
      <div
        key={i}
        className={`nav_link ${i === current && "nav_link_active"}`}
        onClick={() => {
          navigate(to);
          setCurrent(i);
        }}
      >
        {label}
      </div>
    ));
  };

  const handlePathChange = (path) => {
    links.forEach(({ to }, i) => {
      if (to === path.toLocaleLowerCase()) {
        setCurrent(i);
      }
    });
  };

  //
  useEffect(() => {
    //current link handling
    const pathname = window.location.pathname;
    handlePathChange(pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });

    //nav menu
    setOpen(false);

    //nav scroll handling
    document.addEventListener("scroll", handleScroll);
  }, [window.location.pathname]);

  return (
    <div className={`nav section ${isScrolled && "nav_scrolled"}`}>
      <div className="nav_container container">
        <img
          src={logos.flatLogo}
          alt="nav logo"
          className="nav_logo"
          onClick={() => {
            navigate("/");
          }}
        ></img>
        <div className="nav_links">
          {renderLinks()}

          <ContactBtn className="btn btn-borderAccent btn-nav_contact" />
        </div>
        <div
          className="nav_bars"
          onClick={() => {
            setOpen(true);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      {isOpen && (
        <div className="nav_menu">
          <div
            className="nav_menu_close"
            onClick={() => {
              setOpen(false);
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </div>

          <div className="nav_menu_navLinks">{renderLinks()}</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
