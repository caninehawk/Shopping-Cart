import './Shop.css';
import { NavLink, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Cards from './Cards.jsx';

const Shop = (props) => {
    const location = useLocation();
    let productURL;

    if (location.pathname === '/shop/men') {
        productURL = "https://fakestoreapi.com/products/category/men's clothing";
    } else if (location.pathname === '/shop/women') {
        productURL = "https://fakestoreapi.com/products/category/women's clothing";
    } else if (location.pathname === '/shop/jewelery') {
        productURL = "https://fakestoreapi.com/products/category/jewelery";
    } else if (location.pathname === '/shop/electronics') {
        productURL = "https://fakestoreapi.com/products/category/electronics";
    } else {
        productURL = "https://fakestoreapi.com/products";
    }

    return (
        <div className="shop">
            <div className="category">
                <ul className="cat">
                    <li className="cat-item">
                        <NavLink to="/shop" end className="cat-link" activeClassName="active">All</NavLink>
                    </li>
                    <li className="cat-item">
                        <NavLink to="/shop/jewelery" end className="cat-link" activeClassName="active">Jewelery</NavLink>
                    </li>
                    <li className="cat-item">
                        <NavLink to="/shop/electronics" end className="cat-link" activeClassName="active">Electronics</NavLink>
                    </li>
                    <li className="cat-item">
                        <NavLink to="/shop/men" className="cat-link" activeClassName="active">Men Clothing</NavLink>
                    </li>
                    <li className="cat-item">
                        <NavLink to="/shop/women" className="cat-link" activeClassName="active">Women Clothing</NavLink>
                    </li>
                </ul>
            </div>
            <div className="right">
                <Cards 
                    productURL={productURL} 
                    cartCount={props.cartCount} 
                    updateCount={props.updateCount} 
                    kart={props.kart} 
                    updateKartItems={props.setKartItems} 
                    cards={props.cards} 
                    updateCards={props.setCards} 
                />
                <Outlet />
            </div>
        </div>
    );
};

export default Shop;
