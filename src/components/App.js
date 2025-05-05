// import React, {Component, useState} from "react";
// import '../styles/App.css';

// const App = () => {
//   const [errorName, setErrorName] =useState("")


//   return (
//     <div id="main">
//       <form>
//         <input onChange={(e)=>{}} data-testid = 'name' placeholder="Name"></input>
//         <br></br>
//         <br></br>
//         <input placeholder="Email" data-testid = 'email' ></input>
//         <br></br>
//         <br></br>
//         <select data-testid = 'gender'>
//      <option>Male</option>
//      <option>Female</option>
//      <option>Other</option>
//         </select>
//         <br></br>
//         <br></br>
//         <input data-testid = 'phoneNumber' type="Tel" placeholder="Phone Number"></input>
//         <br></br>
//         <br></br>
//         <input data-testid = 'password' type="password" placeholder="Password"  ></input>
//         <br></br>
//         <br></br>
//         <button data-testid = 'submit'>Submit</button>

//       </form>
//     </div>
//   )
// }


// export default App;

import React, { useState } from "react";


const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "Male",
    phoneNumber: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const { name, email, gender, phoneNumber, password } = formData;
    if (!name || !email || !phoneNumber || !password) {
      return "All fields are mandatory.";
    }
    if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
      return "Name is not alphanumeric.";
    }
    if (!email.includes("@")) {
      return "Email must contain @.";
    }
    if (!['Male', 'Female', 'Other'].includes(gender)) {
      return "Please identify as male, female or others.";
    }
    if (!/^[0-9]+$/.test(phoneNumber)) {
      return "Phone Number must contain only numbers.";
    }
    if (password.length < 6) {
      return "Password must contain atleast 6 letters";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setMessage("");
    } else {
      const username = formData.email.split("@")[0];
      setMessage(`Hello ${username}`);
      setError("");
    }
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          value={formData.name}
          data-testid="name"
          placeholder="Name"
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="email"
          value={formData.email}
          placeholder="Email"
          data-testid="email"
        />
        <br />
        <br />
        <select
          onChange={handleChange}
          name="gender"
          value={formData.gender}
          data-testid="gender"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <br />
        <br />
        <input
          onChange={handleChange}
          name="phoneNumber"
          value={formData.phoneNumber}
          data-testid="phoneNumber"
          type="tel"
          placeholder="Phone Number"
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="password"
          value={formData.password}
          data-testid="password"
          type="password"
          placeholder="Password"
        />
        <br />
        <br />
        <button data-testid="submit">Submit</button>
      </form>

      {error && <p>{error}</p>}
      {message && <h2>{message}</h2>}
    </div>
  );
};

export default App;
