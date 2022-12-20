import React from 'react';
import classes from './Button.module.css'

const Button = ({children, ...props}) => {
    const propsClasses = (!!props.className) ? props.className.split(' ').map(className => classes[className]).join(' ') : '';
    return (
        <button {...props} className={`${classes.buttonDefault} ${propsClasses}`}>
            {children}
        </button>
    );
}

export {Button};