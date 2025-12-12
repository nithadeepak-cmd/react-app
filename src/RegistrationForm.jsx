import { Link } from "react-router-dom";
import { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  // handle Change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    //validate on each change
    let errorMessage = "";
    if (name === "name") {
      errorMessage = validateName(value);
      setErrors((prev) => ({ ...prev, name: errorMessage }));
    } else if (name === "email") {
      errorMessage = validateEmail(value);
      setErrors((prev) => ({ ...prev, email: errorMessage }));
    }
  };

  //handle Submit function
  const handleSubmit = (e) => {
    e.preventDefault(); //stops page refresh
    //final validation before submit
    const validationErrors = validateAll(form);
    //if any errors exist stop submit
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // if (form.name.trim() === "") {
    //   setErrors((prev) => ({ ...prev, name: "Name is required" }));
    //   return;
    // }
    alert("Form submitted Successfully!");
  };

  //validate name function
  function validateName(name) {
    let error = "";
    if (!name.trim()) {
      error = "Name is required";
    } else if (name.trim().length < 3) {
      error = "Name must be atleast 3 characters";
    } else if (!/^[A-Za-z]+$/.test(name)) {
      error = "Only letters allowed";
    }
    return error;
  }
  //validate email field
  function validateEmail(email) {
    let error = "";
    if (!email.trim()) {
      error = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error = "Invalid email format";
    }
    return error;
  }

  //function Validate all to be called from handleSubmit
  function validateAll(form) {
    const errors = {};
    //validate name
    const nameError = validateName(form.name);
    if (nameError) errors.name = nameError;
    const emailError = validateEmail(form.email);
    if (emailError) errors.email = emailError;
    return errors;
  }

  return (
    <div>
      <nav style={{ marginBottom: "10px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Link>
      </nav>
      <h1>Registration Form</h1>
      <p>We will build full Form step by step</p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            style={{ padding: "8px", marginLeft: "10px" }}
          ></input>
          {errors.name && <p style={{ color: "orange" }}>{errors.name}</p>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            style={{ padding: "8px", marginLeft: "10px" }}
          ></input>
          {errors.email && <p style={{ color: "orange" }}>{errors.email}</p>}
        </div>
        <div style={{ padding: "6px 15px" }}>
          <button type="submit" style={{ padding: "6px 15px" }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default RegistrationForm;
