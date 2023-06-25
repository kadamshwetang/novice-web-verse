import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    regNo: "",
    block: "",
    password: "",
    roomNo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/student/auth/register",
        formData
      );
      console.log(response.data);
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error(error.response.data);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Registration Number:
        <input
          type="text"
          name="regNo"
          value={formData.regNo}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Block:
        <input
          type="text"
          name="block"
          value={formData.block}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Room Number:
        <input
          type="text"
          name="roomNo"
          value={formData.roomNo}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
