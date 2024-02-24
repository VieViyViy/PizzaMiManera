import React from 'react';
import "../style/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchoolFlag } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className="header" style={{backgroundColor:"green"}}>
            <ul>
                <a href="HomePage">
                    <i>
                        some text
                    </i>
                </a>
            </ul>
        </div>
    );
}

export default Header;