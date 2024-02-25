import React from 'react';
import "../style/style.css";
import Header from '../components/Header';
import SidebarRight from '../components/SidebarRight';
import SidebarLeft from '../components/SidebarLeft';
import GlobalStyle from './GlobalStyles';
import Pizza from '../components/Pizza';

function PizzaPage(){
    
    return(
        <div className="App">
            <GlobalStyle/>
            <Header/>
            <SidebarRight/>
            <SidebarLeft/>
            <Pizza/>
        </div>
    );
}

export default PizzaPage;