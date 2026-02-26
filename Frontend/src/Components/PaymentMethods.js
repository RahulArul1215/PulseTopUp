import React, { useState } from 'react';

const PaymentMethods = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cardType: '',
  });

  const [isCardAdded, setIsCardAdded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCardAdded(true);
  };

  return (
    <div className="bg-red-50 p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold text-red-600 mb-4">Payment Methods</h3>

      {!isCardAdded ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              maxLength="16"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="cardHolder"
              placeholder="Card Holder Name"
              value={cardDetails.cardHolder}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              value={cardDetails.expiryDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div>
            <select
              name="cardType"
              value={cardDetails.cardType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-red-500"
              required
            >
              <option value="">Select Card Type</option>
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
              <option value="American Express">American Express</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-500 transition"
          >
            Add Card
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg font-bold">**** **** **** {cardDetails.cardNumber.slice(-4)}</p>
          <p className="text-sm text-gray-600">{cardDetails.cardType} ending in {cardDetails.cardNumber.slice(-4)}</p>
          <p className="text-sm text-gray-600">Expires {cardDetails.expiryDate}</p>
          <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-500 transition">
            Manage Cards
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentMethods;
