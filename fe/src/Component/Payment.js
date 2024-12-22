import React from "react";
import { loadRazorpayScript } from "../utility/RazorpayScript";
import { placeOrder } from "../Services/createOrder";
import RazorPayoption from "../utility/RazorPayOptions";

const Payment = () => {
  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();

    if (!isScriptLoaded) {
      alert(
        "Failed to load Razorpay SDK. Please check your internet connection."
      );
      return;
    }
    const paylod = {
      currency: "INR",
      amount: 500,
    };
    const orderResponse = await placeOrder(paylod);
    const orderData = await orderResponse.json();

    if (!orderData.id) {
      alert("Failed to create order. Please try again.");
      return;
    }
    const options = RazorPayoption(orderData);
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default Payment;
