import React from 'react'
import './Toolbar.css'
import Logo from '../../UI/Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

function Toolbar(props) {
    return (
        <div className='Toolbar'>
           <div><DrawerToggle clicked = {props.drawerToggleClicked}></DrawerToggle></div>
           <div><Logo></Logo></div>
           <div className = 'DesktopOnly'><NavigationItems></NavigationItems>   </div>
           
        </div>
    )
}

export default Toolbar
