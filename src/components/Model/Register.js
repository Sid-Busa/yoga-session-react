import React, { useState } from "react";
import API from "../Axios/axios";
import "./style.css";

const Register = ({ handlePopUPToggle }) => {
  // state for register form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  // state for error message
  const [errorMessage, setErrorMessage] = useState(null);
  // method for handling state change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  // method for handle submit register form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.email === "") {
      alert("All field must be required");
    }
    try {
      const regiter = await API.post("/user", {
        name: formData.name,
        email: formData.email,
      });
      if (regiter.status) {
        alert("Register successfully");
        handlePopUPToggle();
      }
    } catch (e) {
      console.log(e);
      alert(e.error);
    }
  };
  return (
    <div className="popup_register">
      <div className="register_form">
        <div className="header">
          <div>
            <h3>Register form</h3>
          </div>
          <div className="close" onClick={handlePopUPToggle}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <input
              value={formData.name}
              name="name"
              placeholder="Your name"
              type="text"
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset>
            <input
              value={formData.email}
              name="email"
              placeholder="Your email"
              type="email"
              onChange={handleChange}
              required
            />
          </fieldset>
          <div className="form_error_message">{errorMessage}</div>
          <button type="submit"> Register </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
