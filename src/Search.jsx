import React from 'react';
import './Search.css';

function Search() {
  return (
    <div className="search-page">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search Clothes"
          className="search-bar"
        />
        <button className="search-icon-btn">
          <img src="./src/assets/Images/search.png" alt="Search" />
        </button>
      </div>

      <div className="filter-sort-buttons">
        <button className="filter-btn">
          <img src="./src/assets/Images/filter.png" alt="Filter" className="icon" />
          Filters
        </button>
        <button className="sort-btn">
          <img src="./src/assets/Images/sort.png" alt="Sort" className="icon" />
          Sort
        </button>
      </div>

      <div className="clothes-container">
        <div className="clothes-grid">
          {/* Add as many images as needed */}
          <div className="clothes-item">
            <img src="./src/assets/Images/black_shirt.png" alt="Clothing item 1" />
          </div>
          <div className="clothes-item">
            <img src="./src/assets/Images/black_shirt.png" alt="Clothing item 2" />
          </div>
          <div className="clothes-item">
            <img src="./src/assets/Images/black_shirt.png" alt="Clothing item 3" />
          </div>
          <div className="clothes-item">
            <img src="./src/assets/Images/black_shirt.png" alt="Clothing item 4" />
          </div>
          <div className="clothes-item">
            <img src="./src/assets/Images/black_shirt.png" alt="Clothing item 5" />
          </div>
          <div className="clothes-item">
            <img src="./src/assets/Images/black_shirt.png" alt="Clothing item 6" />
          </div>
          <div className="clothes-item">
            <img src="./src/assets/Images/black_shirt.png" alt="Clothing item 7" />
          </div>
          <div className="clothes-item">
            <img src="./src/assets/Images/black_shirt.png" alt="Clothing item 8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
