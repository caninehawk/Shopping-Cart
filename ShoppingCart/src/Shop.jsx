import './Shop.css';
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Cards from './Cards.jsx';
const Shop = () => {
    return (
        <div className="shop">
            <div className="category">
                <ul className="cat">
                    <li className="cat-item">
                        <NavLink to="/shop" end className="cat-link" activeClassName="active">All</NavLink>
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
                <Cards />
                <Outlet />
            </div>
        </div>
    );
};

export default Shop;
