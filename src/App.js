import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom"
import OrderForm from "./OrderForm";
import schema from "./formSchema";
import * as yup from 'yup'

const initialOrder = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: ""
}
const initialFormErrors = {
  name: ''
}

const App = () => {

  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [cart, setCart] = useState([])
  const [order, setOrder] = useState(initialOrder)

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: " "}))
    .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const onChange = (name, value) => {
    validate(name, value)
    setOrder({
      ...order,
      [name]: value
    })
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
      <h1>Four-Topping Pizza</h1>
      <h2>The pizza place with only four toppings</h2>
      <Link to="/">Home</Link>
      <Link to="pizza">Pizza?</Link>
      <Route path="/pizza">
        <OrderForm order={order} onChange={onChange} onSubmit={onSubmit} errors={formErrors}/>
      </Route>
    </>
  );
};
export default App;
