import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetCatalogItemByIdQuery} from "../redux/services/CatalogApi";
import Loader from "../ui/loaders/Loader";
import uuid from "react-uuid";
import {useDispatch, useSelector} from "react-redux";
import {
    decrementProductCount,
    incrementProductCount,
    setProductSize
} from "../redux/slices/productSlice";
import {addProduct} from "../redux/slices/basketSlice";
import Section from "../ui/Section";
import Alerts from "../components/Alerts";
import {ERROR_LOAD_DATA} from "../helper/messages";

const CatalogDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        data: productDetail,
        isLoading: productDetailLoading,
        isError: productDetailError,
        refetch
    } = useGetCatalogItemByIdQuery(id);

    const product = useSelector(state => state.product);
    const [minCount, maxCount] = [1, 10];

    const incrementCount = () => {
        if (product.count === maxCount) return;
        dispatch(incrementProductCount());
    }

    const decrementCount = () => {
        if (product.count === minCount) return;
        dispatch(decrementProductCount());
    }

    const handleChangeSizeClick = (size) => {
        dispatch(setProductSize(size));
    }

    const handleAddToBasketClick = () => {
        dispatch(addProduct(product));
        navigate('/cart.html')
    }


    const sizes = productDetail?.sizes?.filter(size => size.avalible === true) || [];

    if (productDetailLoading) return <Section><Loader/></Section>;
    if (!productDetailLoading && productDetailError) return <Alerts message={ERROR_LOAD_DATA} onClick={refetch}/>
    return (
        <Section sectionTitle={productDetail.title} sectionClassName='catalog-item'>
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
                    {!!sizes.length && (
                        <>
                            <div className="text-center">
                                <p>Размеры в наличии:
                                    {
                                        sizes.map(size => {
                                            return (
                                                <span
                                                    className={`catalog-item-size ${product.size === size.size ? 'selected' : ''}`}
                                                    key={uuid()} onClick={() => handleChangeSizeClick(size.size)}>
                                            {size.size}
                                        </span>);
                                        })
                                    }
                                </p>
                                <p>Количество:
                                    <span className="btn-group btn-group-sm pl-2">
                                    <button className="btn btn-secondary" onClick={decrementCount}
                                            disabled={(product.count === minCount)}>-</button>
                                    <span className="btn btn-outline-primary">{product.count}</span>
                                    <button className="btn btn-secondary" onClick={incrementCount}
                                            disabled={(product.count === maxCount)}>+</button>
                                </span>
                                </p>
                            </div>
                            <button
                                disabled={product.size === ''}
                                className="btn btn-danger btn-block btn-lg"
                                onClick={handleAddToBasketClick}>
                                В корзину
                            </button>
                        </>
                    )}
                </div>
            </div>
        </Section>
    );
};

export default CatalogDetail;