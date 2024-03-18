import React, { createContext, useContext, useState } from "react";

const RangeContext = createContext();

const colors = {
  0: "#17A589",
  25: "#2E86C1",
  50: "#2471A3",
  75: "#7D3C98",
  100: "#CB4335",
};

export const useRangeContext = () => useContext(RangeContext);

export const RangeProvider = ({ children }) => {
  const initialValue = localStorage.getItem("rangeValue") || 16;
  const [rangeValue, setRangeValue] = useState(initialValue);

  const handleRangeChange = (value) => {
    setRangeValue(value);
    localStorage.setItem("rangeValue", value);
  };

  const color = Object.keys(colors)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .find((key) => rangeValue <= key);

  return (
    <RangeContext.Provider
      value={{ rangeValue, handleRangeChange, color: colors[color] }}
    >
      {children}
    </RangeContext.Provider>
  );
};
