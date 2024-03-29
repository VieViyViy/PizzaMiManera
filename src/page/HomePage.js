import React from 'react';
import "../style/style.css";
import Home from '../components/Home';
import Header from '../components/Header';
import SidebarLeft from '../components/SidebarLeft';
import GlobalStyle from './GlobalStyles';

function HomePage(){
    
    return(
        <div className="App">
            <GlobalStyle/>
            <Header/>
            <SidebarLeft/>
            <Home/>
        </div>
    );
}

export default HomePage;