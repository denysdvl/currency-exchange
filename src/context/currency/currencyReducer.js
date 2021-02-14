import { 
  SET_CURRENCY_RATES,
  SET_LOADING,
  SET_RATES_NAMES,
  SET_BASE_CURRENCY,
  SET_DATE_RATES,
  SET_INTERVAL_UPDATA
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
  [SET_DATE_RATES]: (state, {dateRates}) => ({
    ...state,
    dateRates
  }),
  [SET_INTERVAL_UPDATA]: (state, {intervalUpdata}) => ({
    ...state,
    intervalUpdata
  }),
  DEFAULT: state => state
}

export const currencyReducer = (state, action ) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}