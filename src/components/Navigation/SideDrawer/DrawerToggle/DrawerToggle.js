import React from 'react'

function DrawerToggle(props) {
    return (
        
        <div onClick = {props.clicked} >
            
            MENU
            {console.log('menu clicked')}
        </div>
    )
}

export default DrawerToggle
