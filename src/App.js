import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary 📖</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer className="App-footer">
          This project was coded by {}
          <a href="https://github.com/Emilia188" target="_blank">
            Emilia Adasiewicz {}
          </a>
          and is open-sourced on {}
          <a
            href="https://github.com/Emilia188/dictionary-project"
            target="_blank"
          >
            GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
