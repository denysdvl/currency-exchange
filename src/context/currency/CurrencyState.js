import React, { useReducer } from "react";
import { CurrencyContext } from "./currencyContext";
import { currencyReducer } from "./currencyReducer";
import {
  SET_CURRENCY_RATES,
  SET_LOADING,
  SET_RATES_NAMES,
  SET_BASE_CURRENCY,
  SET_INTERVAL_UPDATE
} from "./types";

export const CurrencyState = ({ children }) => {
  const initialState = {
    currencyRates: [],
    loading: true,
    ratesNames: [],
    baseCurrency: "EUR",
    intervalUpdate: 10000,
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

  const setBaseCurrency = (baseCurrency) => {
    dispatch({ type: SET_BASE_CURRENCY, baseCurrency });
  };

  const setIntervalUpdate = (intervalUpdate) => {
    dispatch({ type: SET_INTERVAL_UPDATE, intervalUpdate });
  };

  return (
    <CurrencyContext.Provider
      value={{
        currencyRates: state.currencyRates,
        loading: state.loading,
        ratesNames: state.ratesNames,
        baseCurrency: state.baseCurrency,
        intervalUpdate: state.intervalUpdate,
        setCurrencyRates,
        setLoading,
        setRatesName,
        setBaseCurrency,
        setIntervalUpdate,
      }}>
      {children}
    </CurrencyContext.Provider>
  );
};
