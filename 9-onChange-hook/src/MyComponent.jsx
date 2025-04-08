import React, { useState } from 'react';
const MyComponent = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('');
  const [shipping, setShipping] = useState('Delivery');

  function handleNameChange(event) {
   setName(event.target.value);  
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }
  
  const resetValue =() => {
    setName('');
    setQuantity(0);
    setComment('');
    setPayment('');
    setShipping('Delivery');
  }
  return ( 
    <>
      <div className='container'>
        <input className='name-field' value={name} onChange={handleNameChange} type="text" placeholder='Enter your name' />
        <p className='display-name'>Name : {name}</p>

        <input className='qty-input' value={quantity} onChange={handleQuantityChange} type="number" />
        <p className='display-qty'>Quantity : {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
        <p>Comment  {comment}</p> 

        <select value={payment} onChange={handlePaymentChange}>
          <option>Select an option</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Visa">Visa</option>
          <option value="Master Card">Master Card</option>
          <option value="PayPal">PayPal</option>
          <option value="COD">COD</option>
        </select>
        <p>Payment method: {payment}</p>

        <label htmlFor="">Shipping Method
          <input type="radio" value="Delivery" checked={shipping === 'Delivery'}
                                         onChange={handleShippingChange} />
                                          Delivery
        </label>
        <label htmlFor="">
        <input type="radio" value="Pick Up" checked={shipping === 'Pick Up'}
                                         onChange={handleShippingChange} />
                                          Pick Up
        </label>
        <p>Sipping : {shipping}</p>
        <button className='btn' onClick={resetValue}>Reset</button><br />
        </div>
    </>
  );
}

export default MyComponent;
