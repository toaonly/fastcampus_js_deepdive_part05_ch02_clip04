export const getCurrencies = (...currencies) => {
  return fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env.VITE_APP_API_KEY}&currencies=${currencies
      .map(currency => currency.toUpperCase())
      .join('%2C')}`
  ).then(res => res.json())
}
