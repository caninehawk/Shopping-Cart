import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import './Cards.css'

const Cards = (props) => {
    const [cards, updateCards] = useState([]);
    const location = useLocation();
    const [kart, updateKart] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(props.productURL);
                const data = await response.json();
                updateCards(data);
            } catch (error) {
                console.error("Error Fetching Information", error);
            }
        };
        fetchData();
    }, [location, props.productURL]);
    useEffect(() => {
        
    })
    
    return (
        <div className="card-container">
            <div className="card-grid">
                {cards.map((product, index) => (
                    <div key={index} className="card">
                        <h4>{product.title}</h4>
                        <img src={product.image} alt={product.title} className="card-img" />
                        <h4>Price: ${product.price}</h4>
                        <button onClick={() => {updateKart(...kart, cards[index])}}>Add to Kart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
