import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5010/card")
            .then((response) => {
                setCard(response.data);
            })
            .catch((error) => {
                console.error("Error :", error);
            });
    }, []);

    return (
        <div>
            {card.map((card) => (
                <div key={card.id}>
                    <img src={card.image} alt="" height="150px"/>
                    <h2>{card.name}</h2>
                    <p>{card.description}</p>
                    <p>{card.price}</p>
                </div>
            ))}
        </div>
    );
}

export default App;