import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import { useState } from 'react';

function App(props) {
  return (
    <>
    <div className="app">
      <Header count = {props.cartCount} addKart={props.handleAddKart}/>
      <Outlet />
    </div>
    </>
  )
}

export default App
