import React from 'react';
import ProductCard from "../ProductCard";
import {useGetCategoriesListQuery} from "../../redux/services/CategoriesApi";
import CategoriesList from "./CategoriesList";
import Loader from "../../ui/loaders/Loader";

const CatalogList = ({children, ...props}) => {

    const {
        data: categoriesItems,
        error: categoriesError,
        isLoading: categoriesLoading,
    } = useGetCategoriesListQuery();


    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {children}

            {categoriesLoading && <Loader/>}
            {!categoriesLoading && !categoriesError && !!categoriesItems &&
                <CategoriesList list={categoriesItems}/>}
            {!categoriesLoading && categoriesError && <div>Ошибка</div>}

            <div className="row">
                {props.catalogList.map(item => <ProductCard key={item.id} {...item} />)}
            </div>

            <div className="text-center">
                <button className="btn btn-outline-primary">Загрузить ещё</button>
            </div>
        </section>
    );
};

export default CatalogList;