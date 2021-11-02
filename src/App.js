import React from "react";
import Header from "./components/Header"
import Routers from "./routes/routes"
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { AuthProvider } from "./components/context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routers />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
