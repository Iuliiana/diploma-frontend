import React, {useEffect, useMemo, useState} from 'react';
// import TopSalesList from "../components/TopSalesList";
// import CatalogList from "../components/catalog/CatalogList";
import {useDispatch, useSelector} from "react-redux";
import {useLazyGetCatalogListQuery, useGetCatalogListQuery} from "../redux/services/CatalogApi";
import {Button} from "../ui/button/Button";
import {setFilter, setOffset} from "../redux/slices/filterSlice";
import {rootApi} from "../redux/rootApi";
import CategoriesList from "../components/catalog/CategoriesList";
import {setCurrentCategories} from "../redux/slices/categoriesSlice";
import {useGetCategoriesListQuery} from "../redux/services/CategoriesApi";

const Home = () => {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.filter);
    const [cat, {data = [], isLoading, isFetching, isError}] = useLazyGetCatalogListQuery();
    const {data: list, isLoading: l2, isFetching: f2} = useGetCatalogListQuery(filter.params);

    const {
        isLoading: categoriesLoading
    } = useGetCategoriesListQuery(null, {skip: l2});


    // const combined = useMemo(() => {
    //     let arr = [(pageSize * (currentPage + 1)]
    //     for (const data of [lastResult.data, currentResult.data, nextResult.data]) {
    //         arr = [...lastResult.data, ...currentResult.data, ...nextResult.data];
    //     }
    //     return arr
    // }, [pageSize, currentPage, lastResult.data, currentResult.data, nextResult.data])
    // const patchCollection = dispatch(
    //     rootApi.util.updateQueryData('getCatalogList', undefined, (draftPosts) => {
    //         draftPosts.push(cat);
    //     })
    // )


    useEffect(() => {
        const promise = cat(filter.params);
        return () => promise.abort();
    }, [filter.params]);


    // useEffect(() => {
    //     dispatch(
    //         rootApi.util.updateQueryData('getCatalogList', offset.filterParam, (draftPosts) => {
    //             draftPosts.push(...data)
    //         })
    //     )
    // }, [offset.filterParam])


    const handleClickLoadMore = () => {
        dispatch(setOffset());
    }

    const handleClick = (id) => {
        dispatch(setCurrentCategories(id));
        dispatch(setFilter({name: 'category', value: id}));
    }


    const {collection: categories} = useSelector(state => state.categories);

    return (
        <>
            {/*<TopSalesList/>*/}
            {/*<CatalogList/>*/}

            <CategoriesList list={categories} onClick={handleClick}/>
            <div className="text-center">
                <Button className="btn btn-outline-primary"
                        onClick={handleClickLoadMore}>Загрузить ещё
                </Button>
            </div>
            <pre>
                {JSON.stringify(list, null, " ")}
            </pre>


        </>
    );
}

export default Home;