import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import './cards.css';

const Cards = () => {
    const [cards, setCards]=useState([]);
    const[selected,setSelected]=useState([]);

    useEffect(() => {
        fetch()
        .then(res => res.json()
        .then(data => setCards(data)))

    },[])

    const handleSelectedCards = card =>{
        const newSelectedCards=[...selected,card];
        setSelected(newSelectedCards);
    }

    return (
        <div>
            <ol>
           {
            selected.map(card => <li key={card.inx}>{card.title}</li>)
           }
            </ol>
           
                {
                    selected.map(card => <h5>totalCredit+{card.credit}</h5> )
                }
            
           <div className="cards-container">
            {
                cards.map(card => <Card key={card.inx}
                    handleSelectedCards={handleSelectedCards} 
                    card={card}></Card>)
            }
           </div>
        </div>
    );
};

export default Cards;