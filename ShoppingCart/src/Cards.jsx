import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './Cards.css';
import Loading from './Loading.jsx';

const Cards = (props) => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(props.productURL);
                const data = await response.json();
                props.updateCards(data);
            } catch (error) {
                console.error("Error Fetching Information", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [location, props.productURL]);

    const handleAddToKart = (product) => {
        props.updateKartItems((prevKart) => [...prevKart, product]);
        props.updateCount();
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="card-container">
            <div className="card-grid">
                {props.cards.map((product, index) => (
                    <div key={index} className="card">
                        <h4>{product.title}</h4>
                        <img src={product.image} alt={product.title} className="card-img" />
                        <h4>Price: ${product.price}</h4>
                        <button onClick={() => handleAddToKart(product)}>Add to Kart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
