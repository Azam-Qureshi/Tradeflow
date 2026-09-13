import React, { useState } from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Menu = () => {
  // const [selectedMenu, setSelectedMenu]=useState(0)
  const [isProfieDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // const handleMenuClick = (index)=>{
  //   setSelectedMenu(index);
  // }
  // const handleProfileClick = () => {
  //   setSelectedMenu(!isProfieDropdownOpen);
  // };
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://tradeflow-7egr.onrender.com/logout",
        {},
        {
          withCredentials: true,
        }
      );

      window.location.href = "http://localhost:5173";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src={logo} style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <NavLink style={{ textDecoration: "none" }} to="/">
              {({ isActive }) => (
                <p className={isActive ? activeMenuClass : menuClass}>
                  Dashboard
                </p>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/orders"
              
            >{({ isActive }) => (
              <p  className={isActive ? activeMenuClass : menuClass}>
                Orders
              </p>
            )}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/holdings"
              
            >{({ isActive }) => (
              <p  className={isActive ? activeMenuClass : menuClass}>
                Holdings
              </p>
            )}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/positions"
             
            >{({ isActive }) => (
              <p  className={isActive ? activeMenuClass : menuClass}>
                Positions
              </p>
            )}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/funds"
              
            >{({ isActive }) => (
              <p  className={isActive ? activeMenuClass : menuClass}>
                Funds
              </p>
            )}
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/apps"
              
            >{({ isActive }) => (
              <p  className={isActive ? activeMenuClass : menuClass}>
                Apps
              </p>
            )}
            </NavLink>
          </li> */}
        </ul>
       
        <hr />
        <div className="profile" >
          <div className="avatar">Tf</div>
          <p className="username" onClick={handleLogout}>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
