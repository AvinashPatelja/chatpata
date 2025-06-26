import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import RestroList from "./components/restro/RestroList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/component/Home";
import AboutUs from "./components/component/AboutUs";
import Search from "./components/component/Search";
import RestroWrapper from "./components/restro/RestroWrapper";
// import Test from './components/component/test';

function App() {
  const restaurants = [
    {
      id: 1,
      name: "if(Cake)", //Add cake icon
      description: "Cake and pastries",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/13/ece1cbe0-c154-450b-896f-71c98db1bf1f_555e12f5-c4fa-4c3d-9604-0741de47cd8a.jpg",
      rating: 4.5,
      cuisine: "Desserts",
      location: "Basavanagudi, Bangalore",
      deliveryTime: "30-40 mins",
      priceRange: "₹200 - ₹500",
      popularDishes: ["Chocolate Cake", "Red Velvet Cupcake", "Cheesecake"]      
    },
    {
      id: 2,
      name: "Yummies",
      description: "Chats and snacks",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/0b2d768141a3d15440dbf03026d43099",
      rating: 2.0,
      cuisine: "Fast Food",
      location: "Jayanagar, Bangalore",
      deliveryTime: "20-30 mins",
      priceRange: "₹100 - ₹300",
      popularDishes: ["Pani Puri", "Bhel Puri", "Sev Puri"]
    },
    {
      id: 3,
      name: "Tasty Treats",
      description: "Sweet and savory",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/20/fabc29cb-1ddc-4596-b541-a0bac5e23f4f_800166.jpg",
      rating: 3.9,
      cuisine: "Bakery",
      location: "Koramangala, Bangalore",
      deliveryTime: "25-35 mins",
      priceRange: "₹150 - ₹400",
      popularDishes: ["Chocolate Croissant", "Fruit Tart", "Cheese Puff"]
    },
    {
      id: 4,
      name: "if(Cookies)", //Add cake icon
      description: "Cookies and biscuits",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/97813e95ee0119f836e818f4e9b805e1",
      rating: 4.5,
      cuisine: "Bakery",
      location: "Indiranagar, Bangalore",
      deliveryTime: "15-25 mins",
      priceRange: "₹50 - ₹200",
      popularDishes: ["Chocolate Chip Cookies", "Oatmeal Raisin Cookies", "Butter Cookies"]
    },
    {
      id: 5,
      name: "Desi Masala",
      description: "Authentic Indian cuisine",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/17/58bccae2-83a0-4260-994a-de42316f2b3a_4d52ff7c-7d5c-4430-89e7-3ef195583636.jpg",
      rating: 2.0,
      cuisine: "Indian",
      location: "MG Road, Bangalore",
      deliveryTime: "40-50 mins",
      priceRange: "₹300 - ₹800",
      popularDishes: ["Butter Chicken", "Paneer Tikka", "Biryani"]
    },
    {
      id: 6,
      name: "Megana Foods",
      description: "Yummy biryani and more",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/6/dbd91d15-5a52-475c-8365-04ec271e0acd_ddff3434-36b2-4176-b6b3-ccaf723ac764.jpg",
      rating: 3.9,
      cuisine: "Biryani",
      location: "Jayanagar, Bangalore",
      deliveryTime: "30-40 mins",
      priceRange: "₹200 - ₹600",
      popularDishes: ["Hyderabadi Biryani", "Chicken Biryani", "Veg Biryani"]
    },
  ];

  // Removed unused restroList state
  //const [searchItem, setSearchItem] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [render, setRender] = useState(true);

  const handleSearch = (searchTerm: string) => {
    const newFilteredList = restaurants.filter((restro) =>
      restro.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRestaurants(newFilteredList);
  };

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
          {render && (
            <>
              <div style={{ textAlign: "center" }}>
                <Search
                  onSearch={handleSearch}
                  placeholder="Search for restaurants..."
                />
              </div>
              {/* <RestroList restroList={filteredRestaurants} /> */}
            </>
          )}
          <Routes>
            <Route path="/" element={<RestroList restroList={filteredRestaurants} />} />
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
