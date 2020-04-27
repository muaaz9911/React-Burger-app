import React from 'react'
import classes from './Button.css';
import './Button.css';

function Button(props) {
    return (
        <div>
             <button
        // className={[classes.Button,classes.Danger]}
        className='Button Danger '
        onClick={props.clicked}>{props.children}</button>
        </div>
    )
}

export default Button
// [props.btnType]].join(' ')