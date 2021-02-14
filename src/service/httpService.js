export function makeHttpService() {
  const __apiBase = "http://data.fixer.io/api/";
  const __apiKey = "00119be97e0550729512c3db243092f1";
  return {
    get,
  };

  async function get(requestUrl, params = {}, headers = {}) {
    const searchParams = new URLSearchParams({'?access_key': __apiKey, ...params}).toString();
    console.log(`${__apiBase}${requestUrl}${searchParams}`)
    try {
      const res = await fetch(`${__apiBase}${requestUrl}${searchParams}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...headers,
        },
      });
      if (!res.ok) {
        throw Error(res.status);
      }
      return await res.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
