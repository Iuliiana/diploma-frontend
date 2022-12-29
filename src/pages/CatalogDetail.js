import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetCatalogItemByIdQuery} from "../redux/services/CatalogApi";
import Loader from "../ui/loaders/Loader";
import uuid from "react-uuid";

const CatalogDetail = () => {
    const {id} = useParams();
    const [minCount, maxCount] = [1, 10];

    const getProductCount = (id) => {
        const productData = localStorage.getItem(id);
        if (!productData) return 1;

        const parseData = JSON.parse(productData);
        return parseData?.count || 1;
    }

    const [productCount, setProductCount] = useState(getProductCount(id));

    const {
        data: productDetail,
        isLoading: productDetailLoading,
        isError: productDetailError,
    } = useGetCatalogItemByIdQuery(id);


    if (productDetailLoading) return <Loader/>
    if (!productDetailLoading && productDetailError) return;

    const incrementCount = () => {
        if (productCount === maxCount) return;
        setProductCount(prevState => prevState + 1);
    }

    const decrementCount = () => {
        if (productCount === minCount) return;
        setProductCount(prevState => prevState - 1);
    }

    const addToBasket = () => {
        localStorage.setItem(id, JSON.stringify({
            id: id,
            price: productDetail.price,
            count: productCount
        }));
    }


    return (
        <section className="catalog-item">
            <h2 className="text-center">{productDetail.title}</h2>
            <div className="row">
                <div className="col-5">
                    <img src={productDetail.images[0]} className="img-fluid"
                         alt={productDetail.title}/>
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <td>Артикул</td>
                            <td>{productDetail.sku}</td>
                        </tr>
                        <tr>
                            <td>Производитель</td>
                            <td>{productDetail.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Цвет</td>
                            <td>{productDetail.color}</td>
                        </tr>
                        <tr>
                            <td>Материалы</td>
                            <td>{productDetail.material}</td>
                        </tr>
                        <tr>
                            <td>Сезон</td>
                            <td>{productDetail.season}</td>
                        </tr>
                        <tr>
                            <td>Повод</td>
                            <td>{productDetail.reason}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="text-center">

                        <p>Размеры в наличии:
                            {/*selected*/}
                            {
                                productDetail.sizes.filter(size => size.avalible === true).map(size => {
                                    return <span key={uuid()} className="catalog-item-size">{size.size}</span>;
                                })
                            }
                        </p>
                        <p>Количество:
                            <span className="btn-group btn-group-sm pl-2">
                                <button className="btn btn-secondary" onClick={decrementCount}
                                        disabled={(productCount === 1)}>-</button>
                                <span className="btn btn-outline-primary">{productCount}</span>
                                <button className="btn btn-secondary" onClick={incrementCount}>+</button>
                            </span>
                        </p>
                    </div>
                    <button className="btn btn-danger btn-block btn-lg" onClick={addToBasket}>В корзину</button>
                </div>
            </div>
        </section>
    );
};

export default CatalogDetail;