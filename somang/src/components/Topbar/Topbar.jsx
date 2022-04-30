import React from "react";
import "./topbar.css";
import { Search, Person, Send, Home, FavoriteBorder } from "@material-ui/icons";

const Header = () => {
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
          <span className="topbarIconItem">
            <Person className="topbarIcon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
