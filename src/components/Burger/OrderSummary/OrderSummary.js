import React from 'react'
import Button from '../../UI/Button/Button';

function OrderSummary(props) {


    const ingredientsummary = Object.keys( props.ingredients)
    .map(igkey => {
    return <li key={igkey}>{igkey} : {props.ingredients[igkey]} </li>
    })



    
    return (
        <div>
            {props.children}
             <h3>Your Order:</h3>
            <ul>
            {ingredientsummary}
            </ul>
    <p>Total Price : {props.price.toFixed(3)}</p>

            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
      
           
        </div>
    )
}

export default OrderSummary
