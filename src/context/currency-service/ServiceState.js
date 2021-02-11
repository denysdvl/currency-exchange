import React, { useReducer } from "react";
import { serviceReducer } from "./serviceReducer";
import { makeCurrencyService } from "../../service/currencyService";
import { ServiceContext } from "./serviceContext";
import { makeHttpService } from "../../service/httpService";

export const ServiceState = ({ children }) => {
  const httpService = makeHttpService();
  const initialState = {
    httpService,
    currencyService: makeCurrencyService({ httpService }),
  };
  const [state, dispatch] = useReducer(serviceReducer, initialState);

  return (
    <ServiceContext.Provider value={{ currencyService: state.currencyService }}>
      {children}
    </ServiceContext.Provider>
  );
};
