import "./App.css";
import logo from "./logo.jpg";
import { getFooterCopy, getFullYear } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label>
            Email: <input type="text" name="email" />
          </label>
          <label>
            Password: <input type="text" name="password" />
          </label>
          <button type="submit" value="submit">
            OK
          </button>
        </form>
      </div>
      <footer className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </footer>
    </div>
  );
}

export default App;
