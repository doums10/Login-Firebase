import React, { useState, useEffect } from "react";
import fire from "./fire";
import "./App.css";

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [EmailError, setEmailError] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [hasAccount, sethasAccount] = useState(false);

  const handleLogin = () => {

  }
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
