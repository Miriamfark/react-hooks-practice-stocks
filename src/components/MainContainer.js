import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [sort, setSort] = useState("Alphabetically")

  useEffect(()=>{
    fetch("http://localhost:3001/stocks")
    .then((r)=>r.json())
    .then((data)=>setStocks(data))
  }, [])

  function handleBuyStock(stock) {
    setMyStocks([...myStocks, stock]) 
  }

  function handleSellStock(stock) {
    const soldArray = myStocks.filter((myStock)=>{
      return myStock.id !== stock.id
    })
    console.log(soldArray)
    setMyStocks(soldArray)
  }

  function sortStocks(e) {
    setSort(e.target.value)
  }

  useEffect(()=>{
    if (sort === "Alphabetically") {
      const alphabeticalArray = stocks.sort(function(a, b) {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      })
      setStocks(alphabeticalArray)
    } else {
      const priceArray = stocks.sort((function (a, b) {
        return a.price - b.price;
      }))
      setStocks(priceArray)
    } 
    }, [sort])

  return (
    <div>
      <SearchBar sort={sort} sortStocks={sortStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={stocks} 
          handleClick={handleBuyStock} 
          sort={sort}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          myStocks={myStocks} 
          handleClick={handleSellStock} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
