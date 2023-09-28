import React from "react";
import "./Home.css";
import { Products } from "./Products";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
function Home() {
  const [product, setProduct] = useState(Products);
  const [type, setType] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [like, setLike] = useState(false);

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    const results = Products.filter((items) =>
      items.product_name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchResults(results);
  }, [searchItem]);

  const ElectronicsFilter = () => {
    setType("electronics");
    setSearchResults([]);
  };
  const fashionFilter = () => {
    setType("fashion");
    setSearchResults([]);
  };
  const mobileFilter = () => {
    setType("mobiles");
    setSearchResults([]);
  };
  const beautyFilter = () => {
    setType("beauty");
    setSearchResults([]);
  };



  return (
    <div className="home-container">
      <div className="left-section">
        <button onClick={ElectronicsFilter} className="electronics">
          Electronics
        </button>
        <button onClick={fashionFilter} className="fashion">
          Fashion
        </button>
        <button onClick={mobileFilter} className="mobiles">
          Mobiles
        </button>
        <button onClick={beautyFilter} className="beauty">
          Beauty
        </button>
      </div>

      <div className="right-section">
        <input
          className="search-box"
          type="text"
          name=""
          placeholder="search"
          value={searchItem}
          onChange={handleChange}
          id=""
        />
        <div>
          {searchResults.map((item) => (
            <div className="search-results">
              <div className="results">
                <img className="result-img" src={item.product_image} alt="" />
                <div>{item.product_name}</div>
                <div>{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="product-wrapper">
          {product
            .filter((name) => name.category === type)
            .map((item, index) => {
              return ( 
                <div className="product-container">
                  {console.log(item.liked)}
                  <div className="product-box">
                    <Link to={`/redmi/${item.id}`}>
                      <img
                        key={index}
                        className="imge"
                        src={item.product_image}
                        alt=""
                      />
                    </Link>
                    <div className="detail-container">
                      <div className="detail">
                        <h3 className="product-label">{item.product_name}</h3>
                        <p>{item.price}</p>
                      </div>
                      <div>
                        <FavoriteTwoToneIcon
                          onClick={() => {
                            setLike(!like);
                          
                          }}
                          className={item.liked ? "clicked" : "select"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
