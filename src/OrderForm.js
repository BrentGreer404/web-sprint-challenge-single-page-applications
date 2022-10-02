import React, {useState} from 'react'

const OrderForm = (props) => {

  const { order, onChange, onSubmit } = props

  const change = (evt) => {
    const { name, value, type, checked } = evt.target
    const useValue = type === "checkbox" ? checked : value
    onChange(name, useValue)
  }

  const submit = evt => {
    evt.preventDefault()
    onSubmit()
  }

  return (
    <div>Order Form
      <form id="pizza-form" onSubmit={submit}>
        <label>Name
          <input 
            type="text"
            name="name"
            id="name-input"
            value={order.name}
            onChange={change}
            />
        </label>
        <label className='size-input'>
          <select
            type="text"
            id="size-dropdown"
            name="size"
            value={order.size}
            onChange={change}>
              <option>--Size--</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
          </select>
        </label>

        <label>Toppings
          <div className='toppings'>
            <label>Pepperoni
              <input
                type="checkbox"
                name="topping1"
                checked={order.topping1}
                onChange={change}
              />
            </label>
            <label>Sausage
              <input 
                type="checkbox"
                name="topping2"
                checked={order.topping2}
                onChange={change}
              />
            </label>
            <label>Mushrooms
              <input 
                type="checkbox"
                name="topping3"
                checked={order.topping3}
                onChange={change}
              />
            </label>
            <label>Onions
              <input 
                type="checkbox"
                name="topping4"
                checked={order.topping4}
                onChange={change}
              />
            </label>
          </div>
        </label>
      
        <label>Special
          <input 
            type="text"
            id="special-text"
            name="special"
            value={order.special}
            onChange={change}
            />
        </label>
        <button>Order Now!</button>
      
      </form>
    </div>
  )
}

export default OrderForm