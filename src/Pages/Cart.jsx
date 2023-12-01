import { useContext } from "react";

export const Cart = () => {


    return(
        <div>
            <h1>Cart</h1>
            {cart.map((item)  => (
                <div key={item.name}>
                    <h2>{item.name}</h2>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
        </div>
    );
}