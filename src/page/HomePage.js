import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import SidebarRight from '../components/SidebarRight';
import SidebarLeft from '../components/SidebarLeft';

function HomePage(){
    return(
        <div className="App">
            <Header/>
            <SidebarRight/>
            <SidebarLeft/>
            <Home/>
        </div>
    );
}

export default HomePage;