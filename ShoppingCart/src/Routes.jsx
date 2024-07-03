import App from './App';
import HomePage from "./HomePage.jsx";
import Shop from "./Shop.jsx";
import Contact from "./Contact.jsx";
import Cart from "./Cart.jsx";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "home",
                element: <HomePage />
            },
            {
                path: "shop",
                element: <Shop />,
                children: [
                    {
                        path: "/shop/men"
                    },
                    {
                        path: "/shop/women"
                    },
                    {
                        path: "/shop/electronics"
                    },
                    {
                        path: "/shop/jewelery"
                    }
                ]
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
];

export default routes;
