export function makeCurrencyService({ httpService }) {
  const errorMsg = {
    "404" :	"The requested resource does not exist.",
    "101" :	"No API Key was specified or an invalid API Key was specified.",
    "103" :	"The requested API endpoint does not exist.",
    "104" :	"The maximum allowed API amount of monthly API requests has been reached.",
    "105" :	"The current subscription plan does not support this API endpoint.",
    "106" :	"The current request did not return any results.",
    "102" :	"The account this API request is coming from is inactive.",
    "201" :	"An invalid base currency has been entered.",
    "202" :	"One or more invalid symbols have been specified.",
    "301" :	"No date has been specified.",
    "302" :	"An invalid date has been specified.",
    "403" : "No or an invalid amount has been specified." ,
    "501" :	"No or an invalid timeframe has been specified.",
    "502" :	`No or an invalid "start date" has been specified.`,
    "503" :	`No or an invalid "end date" has been specified.`,
    "504" :	"An invalid timeframe has been specified.",
    "505" :	"The specified timeframe is too long, exceeding 365 days.",
  }
  return {
    getCurrencylatest,
    getCurrencyDay,
    getCurrency
  };

  async function getCurrencylatest() {
    const res = await httpService.get("latest", { "&format": 1 });
    return _transformCurrency(res);
  }

  async function getCurrency(day, baseRates) {
    const res = await httpService.get(day, { "format": 1 , 'base': baseRates});
    if (res.success) {
      return _transformCurrency(res);
    } else {
      throw new Error(errorMsg[res.error.code]);
    }
  }

  async function getCurrencyDay(day) {
    const res = await httpService.get(day);
    return _transformCurrency(res);
  }

  function _transformCurrency(currency) {
    return {
      base: currency.base,
      date: currency.date,
      rates: Object.entries(currency.rates),
      ratesNames: Object.keys(currency.rates),
    };
  }
}
