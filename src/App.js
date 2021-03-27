import { useState } from 'react';
import './App.css';

function Login(){

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState({visible: "hidden", color: "green", text:""});

  function onInputChange(oEvent){
    setShow({...show, visible: "hidden", color: "red", text:""});
    setUserId(oEvent.target.value);
  }
  function onPasswordChange(oEvent){
    setShow({...show, visible: "hidden", color: "red", text:""});
    setPassword(oEvent.target.value);
  }
  function onConfirmPasswordChange(oEvent){
    setShow({...show, visible: "hidden", color: "red", text:""});
    setConfirmPassword(oEvent.target.value);
  }
  function onsubmit(oEvent){
    if(password !== confirmPassword){
      setShow({...show, visible: "visible", color: "red",text: "Password do not match"});
      setConfirmPassword("");
    }
    else{
      setShow({...show, visible: "visible", color: "green", text: "Password match Login Successfull !!"});
      setConfirmPassword("");
      setPassword("");
      setUserId("");
    }
  }

  return(
    <div className="main-container">
      <h1>Login Page</h1> 
      <div className="form">
          <label for="name">User Id: </label>
          <input autoComplete="off" onChange={onInputChange} id="name" type="text" value={userId} placeholder="User Id"/>

          <label for="password">Password: </label>
          <input onChange={onPasswordChange} className="password" value={password} id="password" 
            type="password" placeholder="Password"/> 

          <label for="confirm-password">Confirm Password: </label>
          <input onChange={onConfirmPasswordChange} className="password" value={confirmPassword} id="confirm-password" 
            type="password" placeholder="Confirm Password" />
      </div>
      <button onClick={onsubmit} className="btn-submit">Submit</button>
      <p style={{visibility: show.visible, color: show.color}}> {show.text} </p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;