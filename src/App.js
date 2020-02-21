import React from "react";
import AccountApp from "./components/AccountApp.js";
import "./App.css";
import {getUserId, isPC} from "./utils";
import LoginComponent from "./components/login/Login";

// 登录
function renderLogin() {
  return (
    <div className="App">
      <LoginComponent/>
    </div>
  )
}

// 退出账号
function Logout() {
  return isPC() && <button onClick={() => {
    localStorage.clear()
    window.location.reload()
  }}>退出账号：{getUserId()}
  </button>
}

function App() {
  if (isPC() && !getUserId()) {
    return renderLogin()
  }
  return (
    <div className="App">
      <Logout/>
      <AccountApp/>
    </div>
  );
}

export default App;
