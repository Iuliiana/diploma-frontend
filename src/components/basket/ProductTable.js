import React, {useMemo, useState} from 'react';
import {deleteProduct, KEY_BASKET_NAME_LOCAL_STORAGE} from "../../redux/slices/basketSlice";
import ProductItem from "./ProductItem";
import uuid from "react-uuid";
import {useDispatch} from "react-redux";
import {currencyFormatter} from "../../helper";

const ProductTable = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const [countPosition, setCountPosition] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useMemo(() => {
        const productsDataString = localStorage.getItem(KEY_BASKET_NAME_LOCAL_STORAGE);
        if (!productsDataString)
            return;
        const products = JSON.parse(productsDataString);
        setItems(products);
        setCountPosition(products.length);
        setTotalPrice(products.reduce((acc, current) => acc + (current.price * current.count), 0));
        /* eslint-disable-next-line */
        }, [countPosition]);


    const handleDeleteClick = (id, size) => {
        dispatch(deleteProduct({size, id}));
        setCountPosition(prevState => prevState - 1);
    }

    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Размер</th>
                <th scope="col">Кол-во</th>
                <th scope="col">Стоимость</th>
                <th scope="col">Итого</th>
                <th scope="col">Действия</th>
            </tr>
            </thead>
            <tbody>
            {!!items.length && items.map((item, index) => <ProductItem onClick={handleDeleteClick} index={index} key={uuid()} {...item}/>)}
            <tr>
                <td colSpan="5" className="text-right">Общая стоимость</td>
                <td>{currencyFormatter.format(totalPrice)}</td>
            </tr>
            </tbody>
        </table>
    );
};

export default ProductTable;