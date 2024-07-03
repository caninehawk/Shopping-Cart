import "./Cart.css";
import { useEffect, useState } from "react";
import Fool from "./Fool.jsx";
import {useNavigate} from "react-router-dom";

const Cart = (props) => {
    const [uniqueProducts, setUniqueProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const productMap = {};
        const initialQuantities = {};
        let totalPrice = 0;

        // Filter unique products and calculate quantities and total price
        props.kart.forEach((product) => {
            if (!productMap[product.id]) {
                productMap[product.id] = product;
            }
            initialQuantities[product.id] = (initialQuantities[product.id] || 0) + 1;
            totalPrice += product.price;
        });

        setUniqueProducts(Object.values(productMap));
        setQuantities(initialQuantities);
        setTotal(totalPrice);
    }, [props.kart]);

    function buyItem() {
        navigate("/fool");
    }

    return (
        <div className="cart-container">
            <div className="cart-grid">
                {uniqueProducts.map((product, index) => (
                    <div key={index} className="cartCards">
                        <h4>{product.title}</h4>
                        <img src={product.image} alt={product.title} className="cart-img" />
                        <h4>Price: ${product.price.toFixed(2)}</h4>
                        <h4>Quantity: {quantities[product.id]}</h4>
                    </div>
                ))}
            </div>
            <div className="total">
                <div className="description">
                    <h2>Total: ${total.toFixed(2)}</h2>
                    <p>This is 100% off so you get cashback after you have made the payment :)</p>
                </div>
                <button className="buy" onClick={buyItem}>Buy</button>
            </div>
        </div>
    );
};

export default Cart;
