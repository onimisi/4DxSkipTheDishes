import React from "react";

import "./SideBar.scss";

export default function SideBar() {
  return (
    <div className='main-side'>
      <div>
        <h2> Dashboard </h2>
        <h2> Deliveries </h2>
        <h2> Reports </h2>
      </div>

      <div className='account'>
        <h2>Account</h2>
        <h2>Settings</h2>
        <h2>Sign Out</h2>
      </div>
    </div>
  );
}
