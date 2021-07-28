import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Pizzaman from '../assets/PizzaMan.png'

function Checkout({ ingredients }) {

    const [success, setSuccess] = useState(false);
    const history = useHistory();


    return (
        <div style={{ display: 'flex', marginLeft: '50px', marginTop: '50px' }}>
            <div style={{ flex: 1 }}>
                <div>
                    <h1 style={{ fontFamily: "Comfortaa" }}>My Ingredient</h1>
                    {Object.keys(ingredients).reduce((acc, ing) => {
                        return acc + ingredients[ing] ? 1 : 0;
                    }, 0) === 0 && <p>No ingredients Selected</p>}
                    {Object.keys(ingredients).map((ingredient) => {
                        return (
                            ingredients[ingredient] && (
                                <p style={{ fontFamily: "Open Sans Condensed", fontSize: 30 }}>
                                    {ingredient[0].toUpperCase()}
                                    {ingredient.substr(1)}
                                </p>
                            )
                        );
                    })}
                    <button
                        
                        className="proceedToCheckout"
                        onClick={() => history.push("/")}
                    >
                        Go Back
                    </button>
                    <button
                        
                        onClick={() => setSuccess(true)}
                        className="proceedToCheckout"
                        style={{ marginLeft: 10 }}
                    >
                        Confirm
                    </button>
                </div>
            </div>
            <div style={{ flex: 1 }}>
                {success && (
                    <div style={{ textAlign: "center" }}>
                        <img src={Pizzaman} alt="pizzaman" height="300px" />
                        <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
                            We have received your order, Thank you
                        </div>
                        <div style={{ fontFamily: "Comfortaa" }}>
                            Order #{Math.round(Math.random() * 100000)}
                        </div>
                        <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
                            Will be ready in 20-30 min.
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default Checkout
