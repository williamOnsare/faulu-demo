import logo from "./Faulu brand.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ marginTop: "2rem" }}>
        <iframe
          title="Qaswazi Support"
          src="https://qaswazi.stage.chatsasa.com"
          width="360"
          height="640"
        ></iframe>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.faulukenya.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Faulu Kenya
        </a>
      </header>
    </div>
  );
}

export default App;
