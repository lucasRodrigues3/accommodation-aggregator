import { useEffect, useState } from "react";

interface Accommodation {
  id: number;
  title: string;
  price: number;
  location: string;
  source: string;
}

function App() {
  const [data, setData] = useState<Accommodation[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/accommodations/")
      .then((res) => res.json())
      .then((res) => setData(res.results || []))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🏠 Accommodation Aggregator</h1>
      {data.length === 0 ? (
        <p>Loading or no data yet...</p>
      ) : (
        <ul>
          {data.map((a) => (
            <li key={a.id}>
              <b>{a.title}</b> — {a.location} — €{a.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
