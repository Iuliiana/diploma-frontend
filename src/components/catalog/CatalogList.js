import React from 'react';
import ProductCard from "../ProductCard";
import {useGetCategoriesListQuery} from "../../redux/services/CategoriesApi";
import CategoriesList from "./CategoriesList";
import Loader from "../../ui/loaders/Loader";
import {useDispatch, useSelector} from "react-redux";
import {setOffset} from "../../redux/slices/filterSlice";
import {Button} from "../../ui/button/Button";
import {useGetCatalogListQuery} from "../../redux/services/CatalogApi";

const CatalogList = ({children}) => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const {
        data: catalogList,
        isLoading: catalogLoading,
        isFetching: catalogFetching
    } = useGetCatalogListQuery(filter.params);

    const {
        isLoading: categoriesLoading
    } = useGetCategoriesListQuery(null, {skip: catalogLoading});


    const {collection: categories} = useSelector(state => state.categories);
    const {collection, isEnd} = useSelector(state => state.catalog);

    const handleClickLoadMore = () => {
        if (isEnd || catalogFetching)
            return;
        dispatch(setOffset());
    }

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {children}

            {catalogLoading && <Loader/>}

            {!catalogLoading && !categoriesLoading && <CategoriesList list={categories}/>}

            {!catalogLoading && !catalogFetching && catalogList.length !== 0 && (
                <div className="row">
                    {catalogList.map(item => <ProductCard key={item.id} {...item} />)}
                </div>
            )}

            {!catalogLoading && catalogFetching && <Loader/>}

            {!isEnd && !catalogFetching && (
                <div className="text-center">
                    <Button className="btn btn-outline-primary" disabled={catalogFetching}
                            onClick={handleClickLoadMore}>Загрузить ещё
                    </Button>
                </div>
            )}

        </section>
    );
};

export default CatalogList;