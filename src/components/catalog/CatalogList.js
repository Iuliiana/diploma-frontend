import React, {useLayoutEffect} from 'react';
import ProductCard from "../ProductCard";
import {useGetCategoriesListQuery} from "../../redux/services/CategoriesApi";
import CategoriesList from "./CategoriesList";
import Loader from "../../ui/loaders/Loader";
import {useDispatch, useSelector} from "react-redux";
import {setOffset} from "../../redux/slices/filterSlice";
import {Button} from "../../ui/button/Button";
import {useGetCatalogListQuery, useLazyGetCatalogListQuery} from "../../redux/services/CatalogApi";

const CatalogList = ({children}) => {
    const dispatch = useDispatch();

    const {isLoading: catalogLoading} = useGetCatalogListQuery();
    const {isLoading: categoriesLoading} = useGetCategoriesListQuery(null, {skip: catalogLoading});
    const [getCatalogListByParams, {isFetching: catalogListIsFetching}] = useLazyGetCatalogListQuery();

    const filter = useSelector(state => state.filter);
    const {collection: categories} = useSelector(state => state.categories);
    const {collection: catalogList, isEnd} = useSelector(state => state.catalog);


    useLayoutEffect(() => {
        const promise = getCatalogListByParams(filter.params);
        return () => promise.abort();
    }, [filter.params]);

    const handleClickLoadMore = () => {
        if (isEnd || catalogListIsFetching)
            return;
        dispatch(setOffset());
    }

    const isShowCatalog = (!catalogLoading && !catalogListIsFetching && catalogList.length !== 0)
        || (catalogListIsFetching && filter.isOffset);


    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {children}

            {catalogLoading && <Loader/>}

            {!catalogLoading && !categoriesLoading && <CategoriesList list={categories}/>}

            {isShowCatalog && (
                <div className="row">
                    {catalogList.map(item => <ProductCard key={item.id} {...item} />)}
                </div>
            )}

            {!catalogLoading && catalogListIsFetching && <Loader/>}

            {!isEnd && !catalogListIsFetching && !catalogLoading && (
                <div className="text-center">
                    <Button className="btn btn-outline-primary" disabled={catalogListIsFetching}
                            onClick={handleClickLoadMore}>Загрузить ещё
                    </Button>
                </div>
            )}

        </section>
    );
};

export default CatalogList;