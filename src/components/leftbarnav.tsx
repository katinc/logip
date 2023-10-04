import React from "react";
import "./css/leftbarnav.css";
import { Icons } from "./Assets";
import IconText from "../components/navItem";
import Upgrade from "./upgrade";

const LeftBarNav = () => {
  return (
    <div className="container">
      <div className="logo">
        <Icons.Twitter className="icon" />
        <h2>logip</h2>
      </div>

      <div className="home">
        <IconText icon={<Icons.Home2 />} text="Home" />
        <IconText icon={<Icons.FourSquares />} text="Projects" />
        <IconText icon={<Icons.Tasks />} text="Tasks" />
        <IconText icon={<Icons.Team />} text="Team" />
        <IconText icon={<Icons.Settings />} text="Settings" />
      </div>

      <div className="upgrade">
        <Upgrade />
      </div>

      <div>
        <div className="footer">
          <IconText icon={<Icons.Settings />} text="Help & Documentation" />
          <IconText icon={<Icons.Settings />} text="Log out" />
        </div>
      </div>
    </div>
  );
};

export default LeftBarNav;
