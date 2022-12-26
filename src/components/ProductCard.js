import React from 'react';
import propTypes from "prop-types";
import {Swiper, SwiperSlide} from "swiper/react";
import uuid from "react-uuid";
import {NavLink} from "react-router-dom";

const ProductCard = (props) => {

    const isEmptyImages = !props.images.length;
    const isSlider = props.images.length > 1;


    return (
        <div className="col-4">
            <div className="card">

                {
                    isSlider && (
                        <Swiper spaceBetween={10}>
                            {props.images.map((item) => {
                                return (
                                    <SwiperSlide key={uuid()}>
                                        <img src={item} className="card-img-top"
                                             alt={props.title}/>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    )
                }
                {
                    !isEmptyImages && !isSlider && (
                        <img src={props.images[0]} className="card-img-top img "
                             alt={props.title}/>
                    )
                }

                <div className="card-body">
                    <p className="card-text card-title">{props.title}</p>
                    <p className="card-text">{props.price} руб.</p>
                    <NavLink to={`/catalog/${props.id}.html`} className="btn btn-outline-primary"> Заказать </NavLink>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    id: propTypes.number.isRequired,
    category: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired,
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