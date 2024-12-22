import { VerifyPayment } from "../Services/verifyPayment";

export default function RazorPayoption(orderData) {
  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Replace with your Razorpay Key ID
    amount: orderData.amount,
    currency: orderData.currency,
    name: "Your Company Name",
    description: "Test Transaction",
    order_id: orderData.id,
    handler: async function (response) {
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
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
  return options
}
