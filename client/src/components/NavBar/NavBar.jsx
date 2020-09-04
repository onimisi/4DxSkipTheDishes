import React from "react";

import "./NavBar.scss";
import SideBar from "../SideBar/SideBar";

export default function NavBar() {
  return (
      <div className='main-nav'>
        <div  className='main-nav__header'>
            {/* <img src="" /> */}
            <h1 className="main-nav__heading">Word Mark</h1>
            <h1 className="main-nav__heading">Johns Place</h1>
            <p className="main-nav__profile">John</p>
        </div>
          <SideBar />
      </div>
  );
}
