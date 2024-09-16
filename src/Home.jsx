import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './App.css';

// Dummy clothing items
const clothingItems = [
  { id: 1, name: "Black Cotton T-shirt", image: "https://via.placeholder.com/150", brand: "XYZ", size: "M", condition: "New" },
  { id: 2, name: "Blue Denim Jeans", image: "https://via.placeholder.com/150", brand: "ABC", size: "L", condition: "Good" },
  { id: 3, name: "Red Hoodie", image: "https://via.placeholder.com/150", brand: "DEF", size: "S", condition: "New" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handling swipes
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clothingItems.length);
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? clothingItems.length - 1 : prevIndex - 1));
    }
  };

  const currentClothingItem = clothingItems[currentIndex];

  return (
    <div className="home-page">
      {/* Swiping Area */}
      <main className="swipe-container" {...handlers}>
        <div className="swipe-card">
          <h3>{currentClothingItem.name}</h3>
          <img src={currentClothingItem.image} alt={currentClothingItem.name} />
          <div className="product-details">
            <p>Brand: {currentClothingItem.brand}</p>
            <p>Size: {currentClothingItem.size}</p>
            <p>Condition: {currentClothingItem.condition}</p>
          </div>
        </div>
      </main>
    
      <footer className="App-footer">
        <p>Swipe left or right to browse more items</p>
      </footer>
    </div>
  );
}

export default Home;