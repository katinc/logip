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
              <div className='footer'>
                <IconText icon={<Icons.Settings />} text='Help & Documentation' />
                <IconText icon={<Icons.Settings />} text='Log out' />
              </div>
            </div>
          </div>

          <div className="rightSection">
            <div className="topbar">
              <div className='top-left'>
                <div className='profilepicture'>
                  {/* <img src='' /> */}
                </div>
                <div className='userprofile'>
                  <h2>Margaret Fletcher</h2>
                  <h4>Project Manager</h4>
                </div>
                <div >
                  <IconText icon={<Icons.Calendar />} text='27 Feb' />
                </div>
              </div>

              <div className='top-right'>
                <div>
                  <IconText icon={<Icons.Search2 />} text='' />
                  <input type="text" />
                </div>
                <div className='alert-message'>
                  <IconText icon={<Icons.Alert />} text='' />
                  <IconText icon={<Icons.Message />} text='' />
                </div>
              </div>

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
