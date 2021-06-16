import React from "react";
import AccountList from "./pages/accountList/index.js";
import "./App.css";
import Route from './router/';

function App() {
  return (
    <div className="App">
      <Route>
        <AccountList />
      </Route>
    </div>
  );
}

export default App;
