import React, { useReducer } from "react";
import { CurrencyContext } from "./currencyContext";
import { currencyReducer } from "./currencyReducer";
import {
  SET_CURRENCY_RATES,
  SET_LOADING,
  SET_RATES_NAMES,
  SET_INTERVAL_UPDATA
} from "./types";

export const CurrencyState = ({ children }) => {
  const initialState = {
    currencyRates: [],
    loading: true,
    ratesNames: [],
    intervalUpdata: 10000,
  };
  const [state, dispatch] = useReducer(currencyReducer, initialState);

  const setCurrencyRates = (currencyRates) => {
    dispatch({ type: SET_CURRENCY_RATES, currencyRates });
  };

  const setLoading = (loading) => {
    dispatch({ type: SET_LOADING, loading });
  };

  const setRatesName = (ratesNames) => {
    dispatch({ type: SET_RATES_NAMES, ratesNames });
  };

  const setIntervalUpdata = (intervalUpdata) => {
    dispatch({ type: SET_INTERVAL_UPDATA, intervalUpdata });
  };

  return (
    <CurrencyContext.Provider
      value={{
        currencyRates: state.currencyRates,
        loading: state.loading,
        ratesNames: state.ratesNames,
        intervalUpdata: state.intervalUpdata,
        setCurrencyRates,
        setLoading,
        setRatesName,
        setIntervalUpdata,
      }}>
      {children}
    </CurrencyContext.Provider>
  );
};
