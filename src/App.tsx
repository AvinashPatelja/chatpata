import { useState } from 'react';
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import RestroList from "./components/restro/RestroList";

function App() {

  const restorents = [
    {
      id: 1,
      name: "if(Cake)", //Add cake icon
      description: "This is the first restro",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Yummies",
      description: "This is the second restro",
      image: "https://via.placeholder.com/150",
      rating: 2.0,
    },
    {
      id: 3,
      name: "Tasty Treats",
      description: "This is the third restro",
      image: "https://via.placeholder.com/150",
      rating: 3.9,
    },
    {
      id: 4,
      name: "if(Cookies)", //Add cake icon
      description: "This is the first restro",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 5,
      name: "Yummies Masala",
      description: "This is the second restro",
      image: "https://via.placeholder.com/150",
      rating: 2.0,
    },
    {
      id: 6,
      name: "Tasty bites",
      description: "This is the third restro",
      image: "https://via.placeholder.com/150",
      rating: 3.9,
    },
  ];

  const [restroList, setRestroList] = useState(restorents);
  const [searchItem, setSearchItem] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restorents);

  const handleSearch = () => {
    const newFilteredList = restorents.filter(restro =>
      restro.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredRestaurants(newFilteredList);
    console.log("Filtered restroList:", restroList);
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
        <p>© 2023 RestroCard. All rights reserved.</p>
        <p>Made with ❤️ by if(Code)</p>
      </div>
    </div>
  );
}

export default App;
