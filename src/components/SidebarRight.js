import React, { useState } from 'react';

const toppingsData = [
  { name: 'Pepperoni', price: 1.5 }, //
  { name: 'Sausage', price: 1.2 }, //
  { name: 'Mushroom', price: 0.8 }, //
  { name: 'Onion', price: 0.5 }, //
  { name: 'Sauce', price: 0.3 }, //
  { name: 'Cheese', price: 1.0 }, //
  { name: 'Bell Pepper', price: 0.7 }, //
  { name: 'Beef', price: 1.2 }, //
  { name: 'Olive', price: 0.6 }, //
];

function SidebarRight() {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (topping) => {
    const isChecked = selectedToppings.includes(topping);

    if (isChecked) {
      setSelectedToppings(selectedToppings.filter((item) => item !== topping));
      setTotalPrice(totalPrice - topping.price);
    } else {
      setSelectedToppings([...selectedToppings, topping]);
      setTotalPrice(totalPrice + topping.price);
    }
  };

  return (
    <div className="container-right">
      <h2>Select Toppings</h2>
      {toppingsData.map((topping) => (
        <div key={topping.name}>
          <label>
            <input
              type="checkbox"
              checked={selectedToppings.includes(topping)}
              onChange={() => handleCheckboxChange(topping)}
            />
            {topping.name} - ${topping.price.toFixed(2)}
          </label>
        </div>
      ))}
      <div>
        <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default SidebarRight;