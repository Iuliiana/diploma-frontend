import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {clearFilter} from "../redux/slices/filterSlice";

const Success = () => {
    const dispatch = useDispatch();
    const handleClickToCatalog = () => {
        dispatch(clearFilter());
    }
    return (
        <section>
            <h2 className="text-center">Ваш заказ успешно отправлен!</h2>
            <p>
                Ожидайте звонок от менеджера в ближайшее время!
            </p>
            <NavLink to={"/catalog.html"} onClick={handleClickToCatalog}>Вернуться в каталог!</NavLink>
        </section>

    );
}

export {Success};