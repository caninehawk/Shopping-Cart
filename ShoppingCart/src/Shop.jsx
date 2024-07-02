import './Shop.css'
import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
const Shop = () =>{
    return (
        <>
            <div className="container">
                <div className="category">
                    <ul className="gender">
                        <  li className="nav-item">
                            <NavLink to="/shop" exact activeClassName="active" className="nav-link">All</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop/male" exact activeClassName="active" className="nav-link">Men Clothing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop/female" activeClassName="active" className="nav-link">Women Clothing</NavLink>
                        </li>
                    </ul>
                </div>
                <Outlet />
            </div> 
        </>
    )
}

export default Shop;