import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import RestroList from "./components/restro/RestroList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/component/Home";
import AboutUs from "./components/component/AboutUs";
import RestroWrapper from "./components/restro/RestroWrapper";
// import Test from './components/component/test';

function App() {

  // Removed unused restroList state
  //const [searchItem, setSearchItem] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        {/* ---------- Header / Nav ---------- */}
        <div className="header">
          <img
            src="https://godesi.in/cdn/shop/files/gif_720x.gif?v=1677240973"
            className="App-logo"
            alt="logo"
          />
          <h2
            style={{
              color: "#da9b26",
              fontFamily: "cursive",
              fontSize: "2rem",
            }}
          >
            Chatpata
          </h2>
          <div className="navbar">
            <ul className="App-links">
              <li>
                <Link onClick={() => setRender(true)} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => setRender(false)} to="/about">
                  About Us
                </Link>
              </li>
              <FontAwesomeIcon icon={faCartShopping} />
            </ul>
          </div>
        </div>
        {/* ---------- Route outlet ---------- */}

        {/* ---------- Body ---------- */}
        <div className="body">
          <Routes>
            <Route path="/" element={<RestroList />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/restro/:id" element={<RestroWrapper />} />
          </Routes>
        </div>
        {/* ---------- Footer ---------- */}
        <div className="footer">
          <p>© 2023 Chatpata. All rights reserved.</p>
          <p>Made with ❤️ by if(Code)</p>
        </div>
        {/* <Test/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
