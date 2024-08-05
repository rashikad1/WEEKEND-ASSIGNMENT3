import React, { useState, useEffect } from 'react';
import '../css/Profile.css';
import profileData from '../assets/profileData.json';
import defaultImage from '../assets/profile1.png';

const Profile = ({ navigateTo }) => {
  const [data, setData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(defaultImage);

  useEffect(() => {
    setData(profileData.users[0]); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    console.log('Updated Profile Data:', data);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>B.planet</h1>
      </div>
      <div className="profile-card">
        <div className="profile-picture">
          <img src={imagePreview} alt="Profile" />
          <input type="file" onChange={handleImageChange} />
        </div>
        <header>
          <h2>{data.name}</h2>
          {!isEditing && <span className="edit-link" onClick={handleEditClick}>Edit</span>}
          {isEditing && <span className="edit-link" onClick={handleSaveClick}>Save</span>}
        </header>
        <div className="profile-field">
          <label>Email</label>
          <input type="text" name="email" value={data.email} onChange={handleChange} readOnly={!isEditing} />
        </div>
        <div className="profile-field">
          <label>Password</label>
          <input type="password" name="password" value={data.password} onChange={handleChange} readOnly={!isEditing} />
        </div>
        <div className="profile-field">
          <label>Phone Number</label>
          <input type="text" name="phoneNumber" value={data.phoneNumber} onChange={handleChange} readOnly={!isEditing} />
        </div>
        <div className="profile-field">
          <label>Address</label>
          <input type="text" name="address" value={data.address} onChange={handleChange} readOnly={!isEditing} />
        </div>
        <div className="profile-field">
          <label>State</label>
          <input type="text" name="state" value={data.state} onChange={handleChange} readOnly={!isEditing} />
        </div>
        <div className="profile-field">
          <label>Zip Code</label>
          <input type="text" name="zipCode" value={data.zipCode} onChange={handleChange} readOnly={!isEditing} />
        </div>
        <button onClick={() => navigateTo('home')}>Back to Home</button>
      </div>
    </div>
  );
};

export default Profile;
