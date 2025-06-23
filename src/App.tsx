import { useState } from 'react';
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import RestroList from "./components/restro/RestroList";
// import Test from './components/component/test';

function App() {

  const restorents = [
    {
      id: 1,
      name: "if(Cake)", //Add cake icon
      description: "Cake and pastries",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/13/ece1cbe0-c154-450b-896f-71c98db1bf1f_555e12f5-c4fa-4c3d-9604-0741de47cd8a.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Yummies",
      description: "Chats and snacks",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/0b2d768141a3d15440dbf03026d43099",
      rating: 2.0,
    },
    {
      id: 3,
      name: "Tasty Treats",
      description: "Sweet and savory",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/20/fabc29cb-1ddc-4596-b541-a0bac5e23f4f_800166.jpg",
      rating: 3.9,
    },
    {
      id: 4,
      name: "if(Cookies)", //Add cake icon
      description: "Cookies and biscuits",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/97813e95ee0119f836e818f4e9b805e1",
      rating: 4.5,
    },
    {
      id: 5,
      name: "Desi Masala",
      description: "Authentic Indian cuisine",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/17/58bccae2-83a0-4260-994a-de42316f2b3a_4d52ff7c-7d5c-4430-89e7-3ef195583636.jpg",
      rating: 2.0,
    },
    {
      id: 6,
      name: "Megana Foods",
      description: "Yummy biryani and more",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/6/dbd91d15-5a52-475c-8365-04ec271e0acd_ddff3434-36b2-4176-b6b3-ccaf723ac764.jpg",
      rating: 3.9,
    },
  ];

  // Removed unused restroList state
  const [searchItem, setSearchItem] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restorents);

  const handleSearch = () => {
    const newFilteredList = restorents.filter(restro =>
      restro.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredRestaurants(newFilteredList);
  }

  return (
    <div className="App">
      <div className="header">
        <img
          src="https://godesi.in/cdn/shop/files/gif_720x.gif?v=1677240973"
          className="App-logo"
          alt="logo"
        />
        <h2 style={{color: '#da9b26', fontFamily: 'cursive', fontSize: '2rem'}}>
          Chatpata
        </h2>
        <div className="navbar">
          <ul className="App-links">
            <li>Home</li>
            <li>About Us</li>
            <FontAwesomeIcon icon={faCartShopping} />
          </ul>
        </div>
      </div>
      <div className="body">
        <div style={{textAlign: "center"}}>
          <input className="input-search" type='text'
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Search for a restro..." />
          <button
            style={{
              marginLeft: "10px",
              backgroundColor: "#da9b26",
              color: "white",
            }}
            onClick={handleSearch}
          >
            Search
          </button>
      </div>
        <RestroList restroList={filteredRestaurants} />
      </div>
      <div className="footer">
        <p>© 2023 Chatpata. All rights reserved.</p>
        <p>Made with ❤️ by if(Code)</p>
      </div>
      {/* <Test/> */}
    </div>
  );
}

export default App;
