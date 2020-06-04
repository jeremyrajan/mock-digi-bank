import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

// services
import { getAccounts } from './services/accountService';

function App() {
  const [accounts, setAccounts] = useState([]);

  const fetchData = async () => {
    const data = await getAccounts();
    setAccounts(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home accounts={accounts} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
