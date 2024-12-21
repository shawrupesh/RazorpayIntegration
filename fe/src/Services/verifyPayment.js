export async function VerifyPayment(paylod) {
  try {
    const res = await fetch("/verify-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paylod), // Adjust as needed
    });
    return res;
  } catch (error) {
    console.log("verification of payment failed", error);
    return;
  }
}
