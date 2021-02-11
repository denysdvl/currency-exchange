export function makeCurrencyService({ httpService }) {
  return {
    getCurrencylatest,
  };

  async function getCurrencylatest() {
    const res = await httpService.get("latest?");
    return res;
  }
}
