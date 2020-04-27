// rendering the burger 

import React from 'react'
import './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

function Burger(props) {

    const transformedIngredients = Object.keys(props.ingredients)
    .map(igkey => {  return [...Array(props.ingredients[igkey])] 
                     .map(( _,i) => {  return  <BurgerIngredient key = {igkey+i} type={igkey}></BurgerIngredient>
                                    });
                  });

                 
    return (
        <div className = 'Burger'> 
            <BurgerIngredient type='bread-top'>   </BurgerIngredient>
            {
                transformedIngredients
            }
            <BurgerIngredient type='bread-bottom'>   </BurgerIngredient>
      
        </div>

       
    )
}

export default Burger
