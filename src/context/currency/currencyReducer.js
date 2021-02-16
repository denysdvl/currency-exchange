import { 
  SET_CURRENCY_RATES,
  SET_LOADING,
  SET_RATES_NAMES,
  SET_BASE_CURRENCY,
  SET_INTERVAL_UPDATE
 } from './types';

const handlers = {
  [SET_CURRENCY_RATES]: (state, {currencyRates}) => ({
    ...state,
    currencyRates
  }),
  [SET_LOADING]: (state, {loading}) => ({
    ...state,
    loading
  }),
  [SET_RATES_NAMES]: (state, {ratesNames}) => ({
    ...state,
    ratesNames
  }),
  [SET_BASE_CURRENCY]: (state, {baseCurrency}) => ({
    ...state,
    baseCurrency
  }),
  [SET_INTERVAL_UPDATE]: (state, {intervalUpdate}) => ({
    ...state,
    intervalUpdate
  }),
  DEFAULT: state => state
}

export const currencyReducer = (state, action ) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}