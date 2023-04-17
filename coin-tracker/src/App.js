import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoin(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coin.length})</h1>
      {loading ? (
        <h2>loading</h2>
      ) : (
        <select>
          {coin.map((e) => (
            <option>
              {e.name} ({e.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
