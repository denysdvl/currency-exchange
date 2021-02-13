export function makeCurrencyService({ httpService }) {
  return {
    getCurrencylatest,
    getCurrencyDay
  };

  async function getCurrencylatest() {
    const res = await httpService.get("latest", {'&format': 1});
    return _transformCurrency(res);
  }

  async function getCurrencyDay(day) {
    const res = await httpService.get(day);
    return _transformCurrency(res);
  }

  function _transformCurrency(currency) {
    return{
    base:  currency.base,
    date: currency.date,
    rates: Object.entries(currency.rates),
    }
}  
}
