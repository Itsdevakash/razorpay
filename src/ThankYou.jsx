import React from "react";
import { useLocation,Link } from "react-router-dom";

function ThankYou() {
  const location = useLocation(); 

  const { razorpay_payment_id, razorpay_order_id, amount } = location.state || {};

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <h1 className="thank-you-title">Thank You for Your Payment!</h1>
        <p className="thank-you-text">
          Your payment was successfully processed. We appreciate your business!
        </p>
        {razorpay_payment_id && (
          <div className="payment-details">
            <p><strong>Payment ID:</strong> {razorpay_payment_id}</p>
            <p><strong>Order ID:</strong> {razorpay_order_id}</p>
            <p><strong>Amount Paid:</strong> ₹{amount}</p>
          </div>
        )}
        {!razorpay_payment_id && <p className="error-text">Error: No payment details available.</p>}

        <Link  to={'/'} className="back-home-button">  Back to Home</Link>
      </div>
    </div>
  );
}

export default ThankYou;
