import React, { useState } from 'react';
import './index.css';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [Company, setCompany] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const[list,setList]=useState([])

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleCompanyName=(e)=>{
    setCompany(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData={
      id:list.length+1,
      name,
      number,
      email,
      password,
      Company,
      selectedOption
    }
    setList([...list,{newData}])
    console.log(list)
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className='heading'>Create Your <br/>PopX Account</h2>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            placeholder='FullName'
          />
        </div>
        <div className="form-group">
          <label htmlFor="Number">Number</label>
          <input
            type="text"
            id="Number"
            value={number}
            onChange={handleNumberChange}
            required
            placeholder='Number'
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder='Email'
            className='email'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder='password'
            className='email'
          />
        </div>
        <div className="form-group">
          <label htmlFor="CompanyName">Company Name</label>
          <input
            type="text"
            id="CompanyName"
            value={Company}
            onChange={handleCompanyName}
            required
            placeholder='Company Name'
          />
        </div>
        <p>Are you an Agency?*</p>
        <div className="form-radio-group">
          
          <label className='form-radio-group' htmlFor='id1'>
          <input
            type="radio"
            value="Yes"
            checked={selectedOption === "Yes"}
            onChange={() => setSelectedOption("Yes")}
            id="id1"
          />
          Yes
          </label >
          <label htmlFor="id2" className='form-radio-group'>
            <input
              type="radio"
              value="No"
              checked={selectedOption === "No"}
              onChange={() => setSelectedOption("No")}
              id="id2"
            />
            No
          </label>
        </div>
        <button className='submit-btn' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
