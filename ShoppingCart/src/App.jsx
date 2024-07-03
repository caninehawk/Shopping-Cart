import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import { useState } from 'react';

function App() {
  const [cartCount, updateCount] = useState(0);
  const handleAddKart = () => {
    updateCount(cartCount+1);
  };
  return (
    <>
    <div className="app">
      <Header count = {cartCount} addKart={handleAddKart}/>
      <Outlet />
    </div>
    </>
  )
}

export default App
