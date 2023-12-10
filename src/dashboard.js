import React, { useState, useEffect } from "react";
import * as Icon from 'react-bootstrap-icons';
import './App.css';
import { initialCategories } from "./data";

function NavBar(){
    return(
        <>
        <div className="Navigation">
        <div className="item">
            <h4>Home</h4>
            <i className="icon"><Icon.HouseFill /></i>
        </div>
        <div className="item">
            <h4>Kategorie</h4>
            <i className="icon"><Icon.ListColumns /></i>
        </div>
        <div className="item">
            <form>
                <input type="text"/>
                <h5><Icon.Search/></h5>
            </form>
        </div>
        <div className="item">
            <h4>Profil</h4>
            <i className="icon"><Icon.PersonBadgeFill /></i>
        </div>
        <div className="item active">
            <h4>Ustawienia</h4>
            <i className="icon"><Icon.GearFill /></i>
        </div>
        </div>
        </>
    )
}
function Dashboard() {
    const [elementWidth, setElementWidth] = useState(0);
    const categoryList = initialCategories.map(category => 
        <div key={category.name}>
            <i className="icon">{category.icon}</i>
            <h2>{category.name}</h2>
            <h4>{category.description}</h4>
        </div>
    );

    useEffect(() => {
        gridChange();
        window.addEventListener('resize', gridChange);
        return () => {
          window.removeEventListener('resize', gridChange);
        };
      }, []);
    
      function gridChange() {
        let git = document.getElementById('for');
        const width = git.offsetWidth;
        setElementWidth(width);
        console.log(width);
      }

      const columns = Math.floor(elementWidth / 260);
    
      const gridTemplateColumns = `repeat(${columns}, 1fr)`;
    
      return (
        <>
          <NavBar />
          <div 
          className="categoryList" 
          id='for' 
          style={{ gridTemplateColumns }}>
            {categoryList}
        </div>
        </>
    );
}

export default Dashboard;
