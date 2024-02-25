import React, { useState } from 'react';
import '../style/style.css'; // Assuming you have a separate CSS file

const toppingsData = [
  { name: 'Sauce', optional: true },
  { name: 'Cheese', optional: true },
  { name: 'Pepperoni', price: 1.5 },
  { name: 'Sausage', price: 1.2 },
  { name: 'Mushroom', price: 0.8 },
  { name: 'Onion', price: 0.5 },
  { name: 'BellPepper', price: 0.7 },
  { name: 'Beef', price: 1.2 },
  { name: 'Olive', price: 0.6 },
];

function SidebarRight() {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (topping) => {
    const isChecked = selectedToppings.includes(topping);

    if (isChecked) {
      setSelectedToppings(selectedToppings.filter((item) => item !== topping));
      setTotalPrice(totalPrice - (topping.price || 0));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
      setTotalPrice(totalPrice + (topping.price || 0));
    }
  };

  return (
    <div className="wrap">
      <div className="container-right">
        <h2>Select Toppings</h2>
        <div className="topping-container">
          {toppingsData.map((topping) => (
            <div key={topping.name} className="topping-item">
              <div className="topping-preview">
                {!topping.optional && (
                  <img
                    src={require(`../resource/${topping.name}Preview.png`)}
                    alt={`${topping.name} Preview`}
                  />
                )}
              </div>
              <label>
                <input
                  type="checkbox"
                  checked={selectedToppings.includes(topping)}
                  onChange={() => handleCheckboxChange(topping)}
                />
                {topping.name} {topping.price ? `- $${topping.price.toFixed(2)}` : ''}
              </label>
            </div>
          ))}
        </div>
        <div>
          <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
        </div>
      </div>
      <div className="toppingImage">
        {toppingsData.map((topping) => (
          <div key={topping.name} className={selectedToppings.includes(topping) ? 'visible' : 'hidden'}>
            <img src={require(`../resource/${topping.name}.png`)} alt={topping.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarRight;