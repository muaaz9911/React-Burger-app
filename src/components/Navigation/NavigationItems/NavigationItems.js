import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

function NavigationItems() {
    return (
        <div className='NavigationItems'>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
            
        </div>
    )
}

export default NavigationItems
