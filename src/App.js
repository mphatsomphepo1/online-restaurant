import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./components/SignIn";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
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
         </Routes>
         <Footer/>  
        </Router>
        </div>
    );
}

export default App;