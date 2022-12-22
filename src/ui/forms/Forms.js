import React from 'react';

const Forms = ({children, ...props}) => {
    return (
        <form {...props} >
            {children}
        </form>
    );
}

export default Forms;