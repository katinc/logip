import { useState } from 'react'
import './App.css'
import { Icons } from './components/Assets'
import IconText from './components/navItem'
import Upgrade from './components/upgrade'

function App() {
  return (
    <>

      <main className="main">

        <div className="rowDivs">
          <div className="leftnav">
            <div className="logo">
              <Icons.Twitter className="icon" />
              <h2>logip</h2>
            </div>

            <div className="nav">
              <div className="home">
                <IconText icon={<Icons.Home2 />} text='Home' />
                <IconText icon={<Icons.FourSquares />} text='Projects' />
                <IconText icon={<Icons.Tasks />} text='Tasks' />
                <IconText icon={<Icons.Team />} text='Team' />
                <IconText icon={<Icons.Settings />} text='Settings' />
              </div>
            </div>
            <div className="logout" ></div>

            <div className="upgrade">
              <Upgrade />
            </div>

            <div>
              <div >
                <IconText icon={<Icons.Settings />} text='Help & Documentation' />
                <IconText icon={<Icons.Settings />} text='Log out' />
              </div>
            </div>
          </div>

          <div className="rightSection">
            <div className="topbar">
              <h2 >
                Margaret Fletcher
              </h2>
            </div>
            <div className="middleSection">
              <div className="leftMiddlebar">
                <h2 >
                  Megan Norton
                </h2>
              </div>

              <div className="rightMiddleSection">
                <div className="topMiddlebar">
                  <h2 >
                    Team
                  </h2>
                </div>

                <div className="bottomMiddlebar">
                  <h2 >
                    Project onboarding
                  </h2>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main >
    </>
  )
}

export default App
