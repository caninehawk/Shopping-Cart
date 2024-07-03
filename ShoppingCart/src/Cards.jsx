import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Cards.css';
import Loading from './Loading.jsx';

const Cards = ({ productURL }) => {
    const [cards, updateCards] = useState([]);
    const location = useLocation();
    const [kart, updateKart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);  // Ensure loading is true at the start of the fetch
            try {
                const response = await fetch(productURL);
                const data = await response.json();
                updateCards(data);
            } catch (error) {
                console.error("Error Fetching Information", error);
            } finally {
                setLoading(false);  // Set loading to false after fetch is complete
            }
        };
        fetchData();
    }, [location, productURL]);

    const handleAddToKart = (product) => {
        updateKart((prevKart) => [...prevKart, product]);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="card-container">
            <div className="card-grid">
                {cards.map((product, index) => (
                    <div key={index} className="card">
                        <h4>{product.title}</h4>
                        <img src={product.image} alt={product.title} className="card-img" />
                        <h4>Price: ${product.price}</h4>
                        <button onClick={() => handleAddToKart(cards[index])}>Add to Kart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
