import React from 'react';
import "../style/style.css";

function Pizza() {
    return (
        <div className="Dough">
            <div className="doughImage">
                <img src={require('../resource/Dough.png')} alt="Dough" />
            </div>
        </div>
    );
}

export default Pizza;