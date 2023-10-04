import React from 'react';
import './css/topbar.css'
import { Icons } from './Assets'
import IconText from '../components/navItem'


const TopBar = () => {
    return (
        <div className="container">
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
        </div>
    );
};

export default TopBar;