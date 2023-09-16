import './card.css';

const Card = (card) => {
    const {title, description, img, price, credit } =card;

    return (

        <div className="card">
            <img src="" alt="" />
            <h3>Title: {}</h3>
            <p>Description: </p>
            <div>
                <h5>price:{} hr</h5>
                <h5>credit:{}</h5>
            </div>
            <button>Select</button>
        </div>
    );
};

export default Card;