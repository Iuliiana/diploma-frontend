import React from 'react';
import propTypes from "prop-types";

const Alerts = (props) => {
    const type = props.type || 'warning'; //warning - yellow, success - green, danger = red
    const title = props.title || 'Ошибка'
    return (
        <div className={`alert alert-${type}`} role="alert">
            <h4 className="alert-heading">{title}</h4>
            <hr/>
            <p className="mb-0">{props.message}</p>
            <br/>
            {Boolean(props.onClick) && (
                <button onClick={props.onClick} className={`btn btn-${type}`}>Попробовать снова</button>
            )}
        </div>
    );
};

Alerts.propTypes = {
    type: propTypes.string,
    title: propTypes.string,
    message: propTypes.string.isRequired,
    onClick: propTypes.func
}

export default Alerts;