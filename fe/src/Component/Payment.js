import React from "react";
import { loadRazorpayScript } from "../utility/RazorpayScript";
import { placeOrder } from "../Services/createOrder";
import { VerifyPayment } from "../Services/verifyPayment";

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

    const options = {
      key: '', // Replace with your Razorpay Key ID
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Your Company Name",
      description: "Test Transaction",
      order_id: orderData.id,
      handler: async function (response) {
        alert(
          "Payment successful! Payment ID: " + response.razorpay_payment_id
        );
        const res = await VerifyPayment();
        if (res?.status === 200) {
          alert("Payment Verified by our Side");
        }
      },
      prefill: {
        name: "Test customer",
        email: "customer@example.com",
        contact: "123456789",
      },
      notes: {
        address: "Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default Payment;
