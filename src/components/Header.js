import React from 'react';
import "../style/style.css";
import titleImage from '../resource/title.png'; 

function Header() {
    return (
        <div className="Header">
            <ul>
                <a href="/HomePage">
                    <div className="titleImage"><img src={titleImage} alt="Good Pizza, Great Pizza"/></div>
                </a>
            </ul>
        </div>
    );
}

export default Header;
