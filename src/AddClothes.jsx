import React, { useState, useRef } from 'react';

function AddClothes() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    condition: '',
    size: '',
    location: '',
    photos: []  // Added to handle file uploads
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here, e.g., send to server
    console.log(formData);
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  }

  //<h1 className="page-title">Create Listing</h1>
  return (
    <div className="add-clothes-container">
      <form onSubmit={handleSubmit} className="add-clothes-form">
        <div className="user-info">
          <img src="./src/assets/Images/profile.png" alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          <label htmlFor="username" className="user-name">Users Name</label>
        </div>
        <div className = "photo-upload">
        <button type="button" onClick={handleFileClick} className="photo-button">Upload Photos</button>
        <input 
          type = "file" name = "photos" onChange = {handleChange} multiple className = "photo-button"
          ref={fileInputRef} style = {{display: 'none'}}
        />
        </div>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="input-field"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="input-field"
        />
        <select name="category" value={formData.category} onChange={handleChange} className="input-field">
          <option value="" disabled hidden>Select Category</option>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="dresses">Dresses</option>
          <option value="outerwear">Outerwear</option>
          <option value="sportswear">Sportswear</option>
          <option value="swimwear">Swimwear</option>
          <option value="suits">Suits</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>
        <select name="condition" value={formData.condition} onChange={handleChange} className="input-field">
          <option value="" disabled hidden>Select Condition</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="fair">Fair</option>
          <option value="poor">Poor</option>

        </select>
        <input
          type="text"
          name="size"
          value={formData.size}
          onChange={handleChange}
          placeholder="Size"
          className="input-field"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="input-field"
        />
        <button type="submit" className="publish-button">Publish</button>
      </form>
    </div>
  );
}

export default AddClothes;