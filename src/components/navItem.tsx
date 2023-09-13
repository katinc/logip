import React from 'react';
import * as Icons from './Assets';
import './navItem.css'

interface IconTextProps {
    icon: React.ReactNode;
    text: string;
}

const IconText: React.FC<IconTextProps> = ({ icon, text }) => {
    return (
        <div className="icon-text-container">
            <span className="icon">{icon}</span>
            <h2 className="text">
                {text}
            </h2>
        </div>
    );
};

export default IconText;
