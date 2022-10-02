import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom"
import OrderForm from "./OrderForm";

const initialOrder = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: ""
}

const App = () => {


  const [cart, setCart] = useState([])
  const [order, setOrder] = useState(initialOrder)

  const onChange = (name, value) => {
    setOrder({...order, [name]: value})
  }

  const onSubmit = () => {
    const newCart = [...cart]
    newCart.push(order)
    console.log("newCart", newCart)
    setCart(newCart)
    setOrder(initialOrder)
  }

  useEffect(() => {
    console.log(order)
  }, [order])

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link to="/">Home</Link>
      <Link to="pizza">Pizza?</Link>
      <Route path="/pizza">
        <OrderForm order={order} onChange={onChange} onSubmit={onSubmit}/>
      </Route>
    </>
  );
};
export default App;
