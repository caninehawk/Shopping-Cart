import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import { useState } from 'react';

function App() {
  const [cartCount, updateCount] = useState(0);
  return (
    <>
      <Header count = {cartCount}/>
      <Outlet />
    </>
  )
}

export default App
