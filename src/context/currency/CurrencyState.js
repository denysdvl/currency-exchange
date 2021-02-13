import React, { useReducer } from "react";
import { CurrencyContext } from "./currencyContext";
import { currencyReducer } from "./currencyReducer";
import { SET_CURRENCY_RATES } from "./types";

export const CurrencyState = ({ children }) => {
  const initialState = {
    currencyRates: [],
  };
  const [state, dispatch] = useReducer(currencyReducer, initialState);

  const setCurrencyRates = (currencyRates) => {
    dispatch({ type: SET_CURRENCY_RATES, currencyRates });
  };

  return (
    <CurrencyContext.Provider value={{ currencyRates: state.currencyRates, setCurrencyRates }}>
      {children}
    </CurrencyContext.Provider>
  );
};
