import { useState } from "react";
import "./App.css";
import { Icons } from "./components/Assets";
import IconText from "./components/navItem";
import Upgrade from "./components/upgrade";
import LeftBarNav from "./components/leftbarnav";
import TopBar from "./components/topbar";

function App() {
  return (
    <>
      <LeftBarNav />
      {/* <main className="main">
        <div className="rowDivs">
          <LeftBarNav />

          <div className="rightSection">
            <TopBar />
            <div className="middleSection">
              <div className="leftMiddlebar">
                <h2>Megan Norton</h2>
              </div>

              <div className="rightMiddleSection">
                <div className="topMiddlebar">
                  <h2>Team</h2>
                </div>

                <div className="bottomMiddlebar">
                  <h2>Project onboarding</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
}

export default App;
