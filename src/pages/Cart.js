import React, {useState, useContext} from 'react'
import CartItem from "../components/CartItem"
import {Context} from "../Context"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    
    const { cartItems, emptyCart } = useContext(Context)
    const totalCost = 6.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    const cartItemElement = cartItems.map(item => (<CartItem key={item.id} item={item} />))

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
            alert("Your order has been placed thank you.")
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElement}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            { 
                cartItems.length > 0 ? 
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> : 
                <p style={{textAlign:"center", fontSize:"1.5rem"}}>You have no item in your cart.</p>
            }
        </main>
    )
}

export default Cart
