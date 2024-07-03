import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import HomePage from "./HomePage.jsx";
import Shop from "./Shop.jsx";
import Contact from "./Contact.jsx";
import Cart from "./Cart.jsx";
import Fool from "./Fool.jsx"

const AppRouter = () => {
    const [cartCount, setCartCount] = useState(0);
    const [kart, setKartItems] = useState([]);
    const [cards, setCards] = useState([]);

    const handleAddKart = () => {
        setCartCount(cartCount + 1);
    };

    const routes = [
        {
            path: "/",
            element: <App cartCount={cartCount} updateCount={handleAddKart} />,
            children: [
                { index: true, element: <HomePage /> },
                { path: "home", element: <HomePage /> },
                {
                    path: "shop",
                    element: <Shop 
                                cartCount={cartCount} 
                                updateCount={handleAddKart} 
                                kart={kart} 
                                setKartItems={setKartItems} 
                                cards={cards} 
                                setCards={setCards} 
                            />,
                    children: [
                        { path: "men" },
                        { path: "women" },
                        { path: "electronics" },
                        { path: "jewelery" }
                    ]
                },
                { path: "contact", element: <Contact /> },
                { path: "cart", element: <Cart kart={kart} /> },
                { path: "fool", element: <Fool />}
            ]
        }
    ];

    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
