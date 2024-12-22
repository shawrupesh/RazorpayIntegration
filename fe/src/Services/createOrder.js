export async function placeOrder(paylod) {
  const API_BASE_URL=process.env.REACT_APP_API_BASE_URL
  try {
    const orderResponse = await fetch(`${API_BASE_URL}/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paylod),
    });
    return orderResponse;
  } catch (error) {
    console.log("error in placing orders", error);
    return ;
  }
}
