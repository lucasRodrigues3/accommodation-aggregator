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
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is logged in (token exists)
    const token = localStorage.getItem("access");
    setLoggedIn(!!token);

    // Fetch accommodations
    fetch("http://127.0.0.1:8000/api/accommodations/")
      .then((res) => res.json())
      .then((res) => setData(res.results || []))
      .catch(console.error);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: 20, position: "relative" }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <h1>🏠 Accommodation Aggregator</h1>

        {loggedIn ? (
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        ) : (
          <a
            href="/login"
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              textDecoration: "none",
              padding: "8px 16px",
              borderRadius: 6,
            }}
          >
            Login
          </a>
        )}
      </header>

      {/* Main content */}
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
