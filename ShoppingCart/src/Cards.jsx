import { useEffect, useState } from "react";
import './Cards.css'
const fakeItemsURL = "https://fakestoreapi.com/products";

const Cards = () => {
    const [cards, updateCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fakeItemsURL);
                const data = await response.json();
                updateCards(data);
            } catch (error) {
                console.error("Error Fetching Information", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="card-container">
            <div className="card-grid">
                {cards.map((product, index) => (
                    <div key={index} className="card">
                        <h3>{product.category}</h3>
                        <p>{product.title}</p>
                        <img src={product.image} alt={product.title} />
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
