import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

//components
import Navbar from "./components/navbar/Navbar";

//pages
import Home from "./pages/Home";
import OurActivitiesPage from "./pages/OurActivitiesPage";
import AchievenementsPage from "./pages/OurRealizations";

import "./styles/app.css";
import Alert from "./components/alert/Alert";

function App() {
  const [alert, setAlert] = useState({
    isAlert: false,
    msg: "",
    isErr: false,
  });

  const clearAlert = () => {
    setAlert({ isAlert: false, msg: "", isErr: false });
  };

  const createCustomAlert = (msg, isErr) => {
    console.log(msg);
    setAlert({
      isAlert: true,
      msg,
      isErr,
    });

    setTimeout(clearAlert, 5000);
  };

  useEffect(() => {
    window.alert = createCustomAlert;
  }, []);

  return (
    <div className="app">
      <Navbar />
      {alert.isAlert && <Alert alert={alert} clearAlert={clearAlert} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosactivites" element={<OurActivitiesPage />} />
        <Route path="/nosrealisations" element={<AchievenementsPage />} />
      </Routes>
    </div>
  );
}

export default App;
