import React, {useLayoutEffect} from 'react';
import ProductCard from "../ProductCard";
import {useGetCategoriesListQuery} from "../../redux/services/CategoriesApi";
import CategoriesList from "./CategoriesList";
import Loader from "../../ui/loaders/Loader";
import {useDispatch, useSelector} from "react-redux";
import {setOffset} from "../../redux/slices/filterSlice";
import {Button} from "../../ui/button/Button";
import {useGetCatalogListQuery, useLazyGetCatalogListQuery} from "../../redux/services/CatalogApi";
import Alerts from "../Alerts";
import {ERROR_CATEGORIES_LOAD, ERROR_LOAD_DATA, NO_RESULT_MESSAGE} from "../../helper/messages";
import Section from "../../ui/Section";

const CatalogList = ({children}) => {
    const dispatch = useDispatch();

    const {isLoading: catalogLoading, isError: catalogListError, refetch: refetchList} = useGetCatalogListQuery();

    const {
        isLoading: categoriesLoading,
        isError: categoriesError,
        refetch: refetchCategories
    } = useGetCategoriesListQuery(null, {skip: (catalogLoading || catalogListError)});

    const [getCatalogListByParams, {
        isFetching: catalogListIsFetching,
        isError: catalogIsError,
        error: catalogError
    }] = useLazyGetCatalogListQuery();

    const filter = useSelector(state => state.filter);
    const {collection: categories} = useSelector(state => state.categories);
    const {collection: catalogList, isEnd} = useSelector(state => state.catalog);


    useLayoutEffect(() => {
        const promise = getCatalogListByParams(filter.params);
        return () => promise.abort();
        /* eslint-disable-next-line */
    }, [filter.params]);

    const handleClickLoadMore = () => {
        if (isEnd || catalogListIsFetching)
            return;
        dispatch(setOffset());
    }
    const isCancelQuery = !!catalogError && catalogError?.name === 'AbortError';
    const isShowCatalog = (!catalogLoading && !catalogListIsFetching && catalogList.length !== 0)
        || (catalogListIsFetching && filter.isOffset);


    if (!catalogLoading && catalogListError) return <Alerts message={ERROR_LOAD_DATA} onClick={refetchList}/>

    if (catalogLoading) return (<Section sectionClassName='catalog' sectionTitle='Каталог'><Loader/></Section>)

    return (
        <Section sectionClassName='catalog' sectionTitle='Каталог'>

            {!catalogLoading && children}

            {catalogList.length === 0 && !filter.isOffset && !catalogLoading && !catalogListIsFetching && !catalogError && !catalogIsError &&
                <Alerts message={NO_RESULT_MESSAGE} type='success' title="Поиск завершен"/>}

            {!catalogLoading && categoriesLoading && <Loader/>}
            {!catalogLoading && !categoriesLoading && !catalogListError && <CategoriesList list={categories}/>}
            {!categoriesLoading && categoriesError && (
                <Alerts message={ERROR_CATEGORIES_LOAD} onClick={refetchCategories}/>
            )}

            {isShowCatalog && (
                <div className="row">
                    {catalogList.map(item => <ProductCard key={item.id} {...item} />)}
                </div>
            )}

            {!catalogLoading && catalogListIsFetching && <Loader/>}

            {!catalogListIsFetching && catalogIsError && !isCancelQuery &&
                <Alerts message={ERROR_LOAD_DATA} onClick={() => getCatalogListByParams(filter.params)}/>}

            {!isEnd && !catalogListIsFetching && catalogList.length !== 0 && (
                (!catalogLoading && !catalogListError) ||
                ((catalogIsError && !isCancelQuery) || (!catalogIsError))
            ) && (
                <div className="text-center">
                    <Button className="btn btn-outline-primary"
                            disabled={catalogListIsFetching || (catalogIsError && !isCancelQuery)}
                            onClick={handleClickLoadMore}>Загрузить ещё
                    </Button>
                </div>
            )}
        </Section>
    );
};

export default CatalogList;