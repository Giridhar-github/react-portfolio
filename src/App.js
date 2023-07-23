import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import SubMain from "./components/SubMain";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [isVerified, setVerified] = useState(false);
  const onVerifying = (data) => {
    console.log(data);
  };
  return (
    <div>
      {!isVerified && <Login onSubmitData={onVerifying} />}
      {isVerified && <Home />}
    </div>
  );
}

export default App;
