import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import Login from "./components/Login";
import useToken from "./components/useToken";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    const {token, setToken} = useToken();

    if (!token) {
        return <Login setToken={setToken}/>
    }
    return (
        < div className = "App" >
        <Router>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signin" element={<SignIn/>}> </Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/preferences" element={<Preferences/>}></Route>
         </Routes>
         <Footer/>  
        </Router>
        </div>
    );
}

export default App;