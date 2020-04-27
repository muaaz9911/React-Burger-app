import React from 'react'
import './buildcontrolsouter.css';

import BuildControl from './BuildControl'

const controls = [
    {label:'Salad' ,
    type : 'salad'},
    {label:'Bacon' ,type : 'bacon'},
    {label:'Meet' ,type : 'meat'},
    {label:'Cheese' ,type : 'cheese'}
]


function BuildControls(props) {
    return (
        <div className='BuildControls' >
              <h3> Price :{  props.price.toFixed(3) }$</h3>
            {   
            controls.map(cont => ( 
                <BuildControl key={cont.label}
                              label={cont.label}
                               added =  {()=>props.ingredientadded(cont.type)}
                               removed =  {()=>props.ingredietremoved(cont.type)}
                 ></BuildControl>
                                ))  
            }

            <button className='OrderButton'
                    disabled={!props.purchasable}
                    onClick={props.ordered}
                    // onClick={alert('sdfsdff')}
                    >Order Now sdf
            </button>
            
            
        </div>
    )
}

export default BuildControls
