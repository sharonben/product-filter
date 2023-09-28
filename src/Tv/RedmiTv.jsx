import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../Products";
import "./RedmiTv.css";

function RedmiTv() {
  const { id } = useParams();

  const intId = parseInt(id);
  const [p, setP] = useState(Products);

  return (
    <div className="redmitv-container">
      {p
        .filter((item) => item.id === intId)
        .map((item) => {
          return (
            <div className="filter-container">
              <div className="left2-section">
                <img
                  className="img"
                  key={item.id}
                  src={item.product_image}
                  alt=""
                />
              </div>
              <div className="right2-section">
                <div>
                  <h1>{item.product_name}</h1>
                  <h3 className="price2">MRP: {item.price}</h3>
                </div>
                <div className="buy-btn">Buy now</div>

              </div>
            </div>
          );
        })}

    </div>
  );
}

export default RedmiTv;
