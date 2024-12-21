export async function placeOrder(paylod) {
  try {
    const orderResponse = await fetch("/create-order", {
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
