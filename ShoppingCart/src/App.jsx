import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
