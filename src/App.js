import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Alert from './Components/Alert';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About';

function App() {
  // PAGE TITLE
  document.title = "TEXT UTILS";

  // *************** STATES *****************
  const [alert, setAlert] = useState(null);
  const [darkMode, setDarkMode] = useState({
    color:"black",
    backgroundColor:"white",
  });


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
        title: "success",
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
        title: "success",
        message: "Light mode enabled"
      });
    }
  }

  setTimeout(() => {
    setAlert(null);
  }, 3000);
  
  return (
    <>
      <Router>
        <Navbar mode={darkMode} darkModeHandler={darkModeHandler}/>
        <Alert alert={alert}/>
        <div className="container m-5 p-5">
          <Routes>
            <Route exact path='/' element={<TextForm mode={darkMode} setAlert={setAlert}/>}></Route>
            <Route exact path='/about' element={<About mode={darkMode}/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
