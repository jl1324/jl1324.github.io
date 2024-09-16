import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './App.css';

// Dummy clothing items
const clothingItems = [
  { id: 1, name: "Black Cotton T-shirt", image: "https://via.placeholder.com/150", brand: "XYZ", size: "M", condition: "New" },
  { id: 2, name: "Blue Denim Jeans", image: "https://via.placeholder.com/150", brand: "ABC", size: "L", condition: "Good" },
  { id: 3, name: "Red Hoodie", image: "https://via.placeholder.com/150", brand: "DEF", size: "S", condition: "New" },
];

// Page components
import Landing from './landing.jsx';
import Home from './Home.jsx';
import Search from './Search.jsx';
import AddClothes from './AddClothes.jsx';
import Forum from './Forum.jsx';
import Profile from './Profile.jsx';

function App() {
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
    <Router>
      <div className="App">
        {/* Top Header */}
        <header className="App-header">
          <div className="header-icons">
            <Link to="/home"><img src="./src/assets/Images/sss_logo.png" alt="Logo" className="header-icon" /></Link>
            <Link to="/search"><img src="./src/assets/Images/search.png" alt="Search" className="header-icon" /></Link>
            <Link to="/add-clothes"><img src="./src/assets/Images/new_shirt.png" alt="Add Clothes" className="header-icon" /></Link>
            <Link to="/forum"><img src="./src/assets/Images/community.png" alt="Forum" className="header-icon" /></Link>
            <Link to="/profile"><img src="./src/assets/Images/profile.png" alt="Profile" className="header-icon" /></Link>
            <Link to="/landing"></Link>
          </div>
        </header>


      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add-clothes" element={<AddClothes />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
