import React from "react";
import "./topbar.css";
import {
  Search,
  Person,
  Send,
  Chat,
  Notifications,
  Home,
  FavoriteBorder,
  InsertEmoticon,
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();
  const onClick = () => {
    navigate("/profile");
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Somang</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <span className="topbarIconItem">
            <Home className="topbarIcon" />
          </span>
          <span className="topbarIconItem">
            <Send className="topbarIcon" />
          </span>
          <span className="topbarIconItem">
            <FavoriteBorder className="topbarIcon" />
          </span>
          <span onClick={onClick} className="topbarIconItem">
            <Person className="topbarIcon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
