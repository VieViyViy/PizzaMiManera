import React, { useState } from 'react';
import '../style/style.css'; // Assuming you have a separate CSS file

const TAX_RATE = 0.10; // Assuming an 10% tax rate
const SERVICE_FEE = 2.5; // A fixed service fee amount

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
  const [showPopup, setShowPopup] = useState(false);

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
  const calculateTotalWithFee = (price, selectedToppings) => {
    const taxRate = 0.1; // 10%
    const serviceFee = 2.0; // $2.00
  
    let note = "";
    if (selectedToppings && !selectedToppings.some(topping => topping.name === "Sauce")) {
      note += "No Sauce ";
    }
    if (selectedToppings && !selectedToppings.some(topping => topping.name === "Cheese")) {
      note += "No Cheese";
    }
  
    const totalWithFee = price * (1 + taxRate) + serviceFee;
  
    return {
      totalWithFee: totalWithFee.toFixed(2),
      note: note.trim(), // Trim extra whitespace
    };
  };  

  const handleSubmit = () => {
    window.alert('The php is not working because I dont know how to do it');
    setShowPopup(true);
    const receiptData = {
      selectedToppings,
      totalPrice,
    };
  
    // Create a string representation of the receipt data
    const receiptString = createReceiptString(receiptData);
  
    fetch('http://localhost:3000/receipt/saveReceipt.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ receiptString }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Handle the response if needed
        console.log(data);
  
        // Show a popup box
        window.alert('Order submitted successfully!');
      })
      .catch(error => {
        // Log the error for debugging
        console.error('Error:', error);
  
        // Show an error popup
        window.alert('Error submitting order. Please try again.');
      });
  };
  
  // Function to create a string representation of the receipt data
  const createReceiptString = (receiptData) => {
    const { selectedToppings, totalPrice } = receiptData;
  
    let receiptString = "Receipt Data:\n";
    receiptString += "Selected Toppings:\n";
  
    selectedToppings.forEach((topping) => {
      receiptString += `- ${topping.name}\n`;
    });
  
    receiptString += `Total Price: $${totalPrice.toFixed(2)}`;
  
    return receiptString;
  };  

  const closePopup = () => {
    setShowPopup(false);
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
      <div className="floating-container">
        <button onClick={handleSubmit}>Submit Order</button>
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h3>Order Summary</h3>
            <ul>
              {selectedToppings.map((topping) => (
                <li key={topping.name}>
                  {topping.name} {topping.price !== undefined ? `- $${topping.price.toFixed(2)}` : ''}
                </li>
              ))}
            </ul>
            <p>Service Fee: ${SERVICE_FEE.toFixed(2)}</p>
            <p>Tax Rate: {TAX_RATE * 100}%</p>
            <p>Total Price (including taxes and service fee): ${calculateTotalWithFee(totalPrice, selectedToppings).totalWithFee}</p>
            {calculateTotalWithFee(totalPrice, selectedToppings).note && (
              <p>Note: {calculateTotalWithFee(totalPrice, selectedToppings).note}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const calculateTotalWithFee = (price) => {
  const taxRate = 0.1; // 10%
  const serviceFee = 2.0; // $2.00
  const totalWithFee = price * (1 + taxRate) + serviceFee;
  return totalWithFee.toFixed(2);
};

export default SidebarRight;
