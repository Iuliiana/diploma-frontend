import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {
    const propsClasses = (!!props.className) ? props.className.split(' ').map(className => classes[className]).join(' ') : '';
    return (
        <input {...props} className={`${classes.inputDefault} ${propsClasses}`}/>
    );
}

export {Input};