import React, { useReducer } from "react";
import { CurrencyContext } from "./currencyContext";
import { currencyReducer } from "./currencyReducer";
import {
  SET_CURRENCY_RATES,
  SET_LOADING,
  SET_RATES_NAMES,
  SET_BASE_CURRENCY,
  SET_DATE_RATES,
  SET_INTERVAL_UPDATA
} from "./types";

export const CurrencyState = ({ children }) => {
  const initialState = {
    currencyRates: [],
    loading: true,
    ratesNames: [],
    baseCurrency: "EUR",
    dateRates: new Date(),
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

  const setBaseCurrency = (baseCurrency) => {
    dispatch({ type: SET_BASE_CURRENCY, baseCurrency });
  };

  const setDateRates = (dateRates) => {
    dispatch({ type: SET_DATE_RATES, dateRates });
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
        baseCurrency: state.baseCurrency,
        dateRates: state.dateRates,
        intervalUpdata: state.intervalUpdata,
        setCurrencyRates,
        setLoading,
        setRatesName,
        setBaseCurrency,
        setDateRates,
        setIntervalUpdata,
      }}>
      {children}
    </CurrencyContext.Provider>
  );
};
