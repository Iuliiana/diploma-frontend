import React from 'react';
import ProductCard from "../ProductCard";
import {useGetCategoriesListQuery} from "../../redux/services/CategoriesApi";
import CategoriesList from "./CategoriesList";
import Loader from "../../ui/loaders/Loader";
import {useDispatch, useSelector} from "react-redux";
import {useGetCatalogListQuery} from "../../redux/services/CatalogApi";
import {setOffset} from "../../redux/slices/filterSlice";
import {Button} from "../../ui/button/Button";

const CatalogList = ({children}) => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);


    const {
        error: catalogError,
        isLoading: catalogLoading,
        isFetching
    } = useGetCatalogListQuery(filter.params);
    // eslint-disable-next-line
    const {categoriesLoading, categoriesError} = useGetCategoriesListQuery();
    const {collection: categories} = useSelector(state => state.categories);
    const {collection: catalogList, isEnd} = useSelector(state => state.catalog);

    if (catalogLoading) return <Loader/>;
    if (!catalogLoading && catalogError && !catalogList.length) return <div>Ошибка</div>;

    const handleClickLoadMore = () => {
        if (isEnd || isFetching)
            return;
        dispatch(setOffset());
    }

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {children}

            {<CategoriesList list={categories}/>}

            <div className="row">
                {catalogList.map(item => <ProductCard key={item.id} {...item} />)}
            </div>

            {isFetching && <Loader/>}

            {
                !isEnd && (
                    <div className="text-center">
                        <Button className="btn btn-outline-primary" disabled={isFetching}
                                onClick={handleClickLoadMore}>Загрузить ещё
                        </Button>
                    </div>
                )
            }

        </section>
    );
};

export default CatalogList;