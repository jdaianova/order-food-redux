import './Dish.css';

export default function Dish({ item }) {
    const { price, name } = item;
    return (
        <div className="Dish">

            <div className="Item">
                {name} PRICE: {price}
            </div>

            <div className="Item-btn">
                {/* to fix later */}
                <button>amount</button>
                <button>add to cart</button>
            </div>

        </div>
    )
};
