import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  let [ShowOrder, setshowOrder] = useState([])

  useEffect(()=>{
    axios.get('https://tradeflow-7egr.onrender.com/showOrders').then((res)=>{
      
      setshowOrder(res.data)
      
    })
  },[])
  return (
    <div className="orders">
      <div className="order-table">

        {/* <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link> */}
        <table>
          <thead>
             <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          </thead>
          <tbody>
            {ShowOrder.map((stock, index)=>{
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
              </tr>
            );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
