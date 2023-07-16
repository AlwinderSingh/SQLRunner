import React, { useState } from 'react';
import EditTable from './EditTable';

const Navbar = ({handleOpenSQLModal,activeTab,handleTabClick}) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">AtlanSQL</div>
      <ul className="nav-tabs">
        <li
          className={activeTab === 'home' ? 'nav-item active' : 'nav-item'}
          onClick={() => handleTabClick('home')}
        >
          Home
        </li>
        <li
          className={activeTab === 'history' ? 'nav-item active' : 'nav-item'}
          onClick={() => handleTabClick('history')}
        >
          View History
        </li>
      </ul>
      <div className="options" onMouseEnter={toggleOptions} onMouseLeave={toggleOptions}>
        <button className="green-button">
          SQL Operations
        </button>
        {showOptions && (
          <ul className="options-list">
            <li onClick={handleOpenSQLModal}>Create new SQL</li>
            <li onClick={()=>{handleTabClick("edit")}}>Edit Previous SQLs </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
