import React from 'react';
import propTypes from "prop-types";

const ProductCard = (props) => {
    return (
        <div className="col-4">
            <div className="card">
                <img src={props.images[0]}
                     className="card-img-top img-fluid" alt="Босоножки 'MYER'"/>
                <div className="card-body">
                    <p className="card-text">{props.title}</p>
                    <p className="card-text">{props.price} руб.</p>
                    <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    id: propTypes.number.isRequired,
    category: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string),
    sku: propTypes.oneOfType([propTypes.string, propTypes.number]),
    manufacturer: propTypes.string,
    color: propTypes.string,
    material: propTypes.string,
    season: propTypes.string,
    heelSize: propTypes.string,
    price: propTypes.number.isRequired,
    oldPrice: propTypes.number,
    sizes: propTypes.arrayOf(
        propTypes.objectOf(propTypes.shape({
            size: propTypes.string,
            avalible: propTypes.bool,
        })))
}

export default ProductCard;