import React from 'react';
import ProductTable from "../components/basket/ProductTable";
import OrderForm from "../components/basket/OrderForm";

const Cart = () => {
    return (
        <>
            <section className="cart">
                <h2 className="text-center">Корзина</h2>
                <ProductTable/>
            </section>
            <section className="order">
                <h2 className="text-center">Оформить заказ</h2>
                <OrderForm/>
            </section>
        </>
    );
};

export default Cart;