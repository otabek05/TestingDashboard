import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./top-nav.css";

const TopNav = () => {

  const [query, setQuery] = useState('');
 
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
  const handleSearch = () => {
    // Send the search query to the backend
    // Replace `your-backend-url` with the actual URL of your backend endpoint
    console.log(query);
    alert("Search: " + query);
    setQuery('');
    /* axios.post('api/search', { query })
       .then((response) => {
         // Handle the response from the backend
         console.log(response.data);
       })
       .catch((error) => {
         // Handle any errors that occurred during the request
         console.error('Error:', error);
       }); */
  };
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <div>
            <input type="text" onKeyDown={handleKeyPress} value={query} onChange={handleChange} />
            <input type="submit" onClick={handleSearch}  value="Search" />
          </div>
        </div>
        <div className="top__nav-right">
          <button type="button" class="btn btn-primary">
            Messege <span class="badge text-bg-secondary">4</span>
          </button>
          <div className="sidebar__bottom">

            <span>
              <i className="ri-logout-circle-r-line"></i> Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
