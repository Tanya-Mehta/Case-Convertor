import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Aboutus from "./components/Aboutus";
import {BrowserRouter ,Route,Routes} from "react-router-dom"
function App() {
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode", "danger");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("lightmode", "danger");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
  <BrowserRouter>
    <Navbar sec="aboutus" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
        <Routes>
            <Route path='/'element={<TextForm  showAlert={showAlert}heading="enter the text " mode={mode}/>}></Route>   
            <Route path='/AboutUs' element={<Aboutus mode={mode}/>}></Route>
        </Routes>
        </div>
        </BrowserRouter>
       
      
      
    </>
  );
}

export default App;
