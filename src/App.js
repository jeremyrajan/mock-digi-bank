import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Header } from "semantic-ui-react";

// services
import { getAccounts } from "./services/accountService";

function App() {
  const [accounts, setAccounts] = useState([]);

  const fetchData = async () => {
    const data = await getAccounts();
    setAccounts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="topbar">
        <img className="App-logo" src={logo} alt="mobile digi bank" />
        <Header as="h1">Welcome to Mobile Digi Bank</Header>
      </div>
      <div className="container">
        <Home accounts={accounts} />
      </div>
    </div>
  );
}

export default App;
