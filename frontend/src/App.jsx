import "./App.css";
import './index.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  

import Login from "./pages/login/login.jsx";
// import SignUp from "./pages/signup/signUp.jsx"; // Fixed import statement
import SignUp from "./pages/signup/signup.jsx";
import Home from "./pages/home/home.jsx";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <SignUp /> Changed to uppercase */}
      <Home/>
    </div>
  );
}

export default App;
