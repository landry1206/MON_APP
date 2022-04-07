import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to='/' exact activeClassName="active-left-nav">
            <img src="" alt="accueil"/>
          </NavLink>
          <br/>
          <NavLink to='/trending' exact activeClassName="active-left-nav">
            <img src="" alt="tendances"/>
          </NavLink>
          <br/>
          <NavLink to='/exposition' exact activeClassName="active-left-nav">
            <img src="" alt="expo"/>
          </NavLink>
          <br/>
          <NavLink to='/profil' exact activeClassName="active-left-nav">
            <img src="" alt="profil"/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;