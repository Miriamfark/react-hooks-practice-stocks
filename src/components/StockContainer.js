import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleClick, sort }) {

  let stocksArray;
  if (stocks) {
    stocksArray = stocks.map((stock)=>{
      return <Stock 
      handleClick={handleClick}
      key={stock.id}
      stock={stock}
      />
    })
  } 

  return (
    <div>
      <h2>Stocks</h2>
      {stocksArray}
    </div>
  );
}

export default StockContainer;
