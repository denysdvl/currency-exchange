import { SET_CURRENCY_RATES } from './types';

const handlers = {
  [SET_CURRENCY_RATES]: (state, {currencyRates}) => ({
    ...state,
    currencyRates
  }),
  DEFAULT: state => state
}

export const currencyReducer = (state, action ) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}