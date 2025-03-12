// v2
// ensures price remains across the app

import { createContext, useContext, useState } from "react";

const TotalPriceContext = createContext();

export function TotalPriceProvider({ children }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleBuy = (price) => {
    setTotalPrice((prevTotal) => prevTotal + price); 
  }
  return (
    <TotalPriceContext.Provider value={{ totalPrice, handleBuy }}>
      {children}
    </TotalPriceContext.Provider>
  );
}

export function useTotalPrice() {
  return useContext(TotalPriceContext);
}