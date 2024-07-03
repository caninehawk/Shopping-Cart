import { NavLink, useNavigate } from "react-router-dom";
import './Header.css';
import logo from './assets/logo.png';
import cart from './assets/cart.svg';
const Header = (props) => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate("/cart");
    }
    return (
    <>
        <div className="header">
            <nav className="navbar">
                <div className="logo-container">
                    <img src={logo} alt="cart-icon" className="logo"/>
                </div>
                <div className="options">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop" activeClassName="active" className="nav-link">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="cart" onClick={handleCartClick}>
                    <img src={cart} alt="cart" className="cart-logo"/>
                    <p>{props.count}</p>
                </div>
            </nav>
        </div>        
    </>
    
  );
};

export default Header;
