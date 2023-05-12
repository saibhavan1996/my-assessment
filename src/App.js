import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from "./component/LandingPage"
import SignupPage from "./component/SignupPage"
import ProfilePage from './component/ProfilePage'
import LoginPage from "./component/LoginPage"

const App=()=> {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage/>}/>
      <Route exact path="/LoginPage" element={<LoginPage/>}/>
      <Route exact path="/Signup" element={<SignupPage/>}/>
      <Route exact path="/Profile" element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
