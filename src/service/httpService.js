export function makeHttpService() {
  const __apiBase = "http://data.fixer.io/api/";
  const __apiKey = "access_key=87317c6346ba5424813755b552bb8e12";
  return {
    get,
  };

  async function get(url, headers = {}) {
    try {
      const res = await fetch(`${__apiBase}${url}${__apiKey}`, {
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
