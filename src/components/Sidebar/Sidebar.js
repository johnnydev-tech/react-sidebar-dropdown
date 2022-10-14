import React, { useState } from "react";

import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import SentinelaIcon from "../icons/home-icons/not-clicked-icons/icon-1_logoSentinela.svg";
import "./style.css";


function Navbar() {
  const [Item, setItem] = useState(true);

  const showItem = () => setItem(!Item);

function checkIsSelected(path) {
  console.log("path: " + path);
  console.log("window.location.pathname: " + window.location.pathname);
  return window.location.pathname === path;
}
 
  return (

      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={"nav-menu"}>
          <ul>
            <img  className="sentinela-icon" src={SentinelaIcon} alt="icon" />
          </ul>
          <hr/>
          <ul className="nav-menu-items" onClick={showItem}>
            {SidebarData.map((item, index) => {
              return (
                console.log(window.location.pathname),
                <li key={index} className={ checkIsSelected(item.path)? item.selectedcName : item.cName}>
                  <Link
                    to={item.path}
                  onClick={showItem}
                  >
                   <img src={!checkIsSelected(item.path)?item.iconClicked:item.icon} alt={item.title} className={checkIsSelected(item.path)? item.selectedcName : item.cName} />
                    {/* <span>{item.title}</span> */}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>

  );
}

export default Navbar;
