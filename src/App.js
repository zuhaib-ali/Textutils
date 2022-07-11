import './App.css';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

function App() {
  const [darkMode, setDarkMode] = useState({
    color:"black",
    backgroundColor:"white",
  });

  // Alert
  const [alert, setAlert] = useState(null);

  function darkModeHandler(){
    if(darkMode.color === "black"){
      setDarkMode({
        color:"white",
        backgroundColor:"#63666A"
      });
      document.body.style.color = "white"
      document.body.style.backgroundColor = "#63666A"

      // SET ALERT
      setAlert({
        title: "Mode Changed",
        message: "Dark mode enabled"
      });

    }else{
      setDarkMode({
        color:"black",
        backgroundColor:"white"
      });
      document.body.style.color = "black"
      document.body.style.backgroundColor = "white"

      // SET ALERT
      setAlert({
        title: "Mode Changed",
        message: "Light mode enabled"
      });
    }
  }

  setTimeout(() => {
    setAlert(null);
  }, 3000);
  
  return (
    <>
      <Navbar mode={darkMode} darkModeHandler={darkModeHandler}/>
      <Alert alert={alert}/>
      <TextForm mode={darkMode} setAlert={setAlert}/>
    </>
  );
}

export default App;
