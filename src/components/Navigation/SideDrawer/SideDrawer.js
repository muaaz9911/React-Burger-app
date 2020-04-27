import React from 'react'
import Logo from '../../UI/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop'
import './SideDrawer.css'

function SideDrawer(props) {

        let attachedClasses = 'SideDrawer Close';
        if (props.open) {
            attachedClasses = 'SideDrawer Open';
        }


    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} ></Backdrop>
             <div className={attachedClasses}>
                 <div className='logo'>   <Logo /> </div>
                <nav >
                    <NavigationItems />
                </nav>

                </div>
        </React.Fragment>
    )
}

export default SideDrawer
