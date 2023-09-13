import React from 'react';
import './upgrade.css'
import { Icons } from './Assets'

const Upgrade = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="title">
                    <h2>Upgrade to Pro</h2>
                    <Icons.Fire className="icon" />
                </div>
            </div>
            <div className="body">
                <h3>Get 1 month free and unlock all Pro features</h3>
            </div>
            <div className="footer-button">
                <button>
                    Upgrade
                </button>
            </div>

        </div>
    );
};

export default Upgrade;
