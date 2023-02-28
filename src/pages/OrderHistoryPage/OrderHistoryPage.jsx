import React from "react";
import { checkToken } from "../../utilities/users-service";
//import * as userServices from "../../utilities/users-service";

function OrderHistoryPage() {
  async function handleClick() {
    //userServices.checkToken()
    const expDate = await checkToken();
    console.log(expDate);
  }

  return (
    <>
      <div>OrderHistoryPage</div>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default OrderHistoryPage;
