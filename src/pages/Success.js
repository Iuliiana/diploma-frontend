import {NavLink} from "react-router-dom";

const Success = () => {
    return (
        <section>
            <h2 className="text-center">Ваш заказ успешно отправлен!</h2>
            <p>
                Ожидайте звонок от менеджера в ближайшее время!
            </p>
            <NavLink to={"/catalog.html"}>Вернуться в каталог!</NavLink>
        </section>

    );
}

export {Success};