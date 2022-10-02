import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom"
import OrderForm from "./OrderForm";
import schema from "./formSchema";
import * as yup from 'yup'
import axios from "axios";

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
    const newOrder = {
      name: order.name.trim(),
      size: order.size.trim(),
      topping1: order.topping1,
      topping2: order.topping2,
      topping3: order.topping3,
      topping4: order.topping4,
      special: order.special.trim()
    }
    axios.post("https://reqres.in/api/orders", newOrder)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
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
      <Link to="pizza"  id="order-pizza">Pizza?</Link>
      <Route path="/pizza">
        <OrderForm order={order} onChange={onChange} onSubmit={onSubmit} errors={formErrors}/>
      </Route>
    </>
  );
};
export default App;
