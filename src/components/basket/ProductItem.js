import React from 'react';
import {NavLink} from "react-router-dom";
import propTypes from "prop-types";
import {currencyFormatter} from "../../helper";

const ProductItem = (props) => {
    const totalPrice = props.price * props.count;

    return (
        <tr>
            {/* eslint-disable-next-line jsx-a11y/scope */}
            <td scope="row">{props.index + 1}</td>
            <td><NavLink to={`/catalog/${props.id}.html`}>{props.title}</NavLink></td>
            <td>{props.size}</td>
            <td>{props.count}</td>
            <td>{currencyFormatter.format(props.price)}</td>
            <td>{currencyFormatter.format(totalPrice)}</td>
            <td>
                <button className="btn btn-outline-danger btn-sm"
                        onClick={() => props.onClick(props.id, props.size)}>
                    Удалить
                </button>
            </td>
        </tr>
    );
};

ProductItem.propTypes = {
    id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    title: propTypes.string.isRequired,
    size: propTypes.string.isRequired,
    count: propTypes.number.isRequired,
    price: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
    index: propTypes.number.isRequired,
}

export default ProductItem;