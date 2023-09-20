import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    gender: 'male',
    location: 'city1',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here, e.g., send the formData to the server
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="contact">Contact Number:</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          required
        />

        <label>Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Location:</label>
        <input
          type="radio"
          id="location1"
          name="location"
          value="city1"
          checked={formData.location === 'city1'}
          onChange={handleInputChange}
        />
        <label htmlFor="location1">City 1</label>
        <input
          type="radio"
          id="location2"
          name="location"
          value="city2"
          checked={formData.location === 'city2'}
          onChange={handleInputChange}
        />
        <label htmlFor="location2">City 2</label>
        <input
          type="radio"
          id="location3"
          name="location"
          value="city3"
          checked={formData.location === 'city3'}
          onChange={handleInputChange}
        />
        <label htmlFor="location3">City 3</label>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;
