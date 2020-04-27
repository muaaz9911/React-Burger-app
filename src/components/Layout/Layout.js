import React , {Component} from 'react';
// import classes from './Layout.css';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }


    render(){
return(
        <React.Fragment>
        <Toolbar  drawerToggleClicked = {this.sideDrawerToggleHandler}></Toolbar>
        <SideDrawer open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} ></SideDrawer>
        <main className='Content' >
         {this.props.children}
        </main >
        </React.Fragment>
)

    }
 
}

export default Layout
