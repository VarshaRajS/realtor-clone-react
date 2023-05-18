import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./pages/home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./component/Header"

function App() {
  return (
    <>
      <Router>
        <Header/>
       <div>
        <Route path="/" element={<Home/>}/>
        <Route path="/Profile" element={ <Profile/> } />
        <Route path="/sign-in" element={ <SignIn/> } />
        <Route path="/sign-up" element={ <SignUp/> } /> 
        <Route path="/offers" element={ <Offers/> } />
        <Route path="/forgot-password" element={ <ForgotPassword/> } />
        </div>
        </Router>
        
    </>
  );
}

export default App;
