import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, handleClick }) {

  let myStocksArray;
  if (myStocks) {
    myStocksArray = myStocks.map((stock)=>{
      return <Stock handleClick={handleClick} stock={stock} key={stock.id} />
    })
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {myStocksArray}
    </div>
  );
}

export default PortfolioContainer;
