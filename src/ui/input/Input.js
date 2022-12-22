import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <input {...props} className={`${classes.inputDefault} ${!!props.className && props.className}`}/>
    );
}

export {Input};