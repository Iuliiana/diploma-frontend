import React, {useEffect, useState} from 'react';
import {isEmptyObjProp} from "../../helper";
import {Input} from "../../ui/input/Input";
import {useSetOrderMutation} from "../../redux/services/OrderApi";
import {useNavigate} from "react-router-dom";
import Loader from "../../ui/loaders/Loader";
import Alerts from "../Alerts";
import {ERROR_SEND_ORDER} from "../../helper/messages";

const OrderForm = () => {
    const navigate = useNavigate();
    const [
        setOrder, {isLoading, isError, isSuccess},
    ] = useSetOrderMutation();

    const [form, setForm] = useState({
        phone: '',
        address: '',
        agreement: ''
    });
    const [isShowErrMessage, setIsShowErrMessage] = useState({
        phone: false,
        address: false,
        agreement: false
    });

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (isEmptyObjProp(form) || form.agreement !== true) {
            return;
        }
        if (!phoneValidate(form.phone)) {
            setIsShowErrMessage(prevState => ({...prevState, phone: true}));
            return;
        }
        setOrder(form)
    }

    useEffect(() => {
        if (isSuccess)
            navigate('/order/success.html');
        /* eslint-disable-next-line */
    }, [isSuccess])

    const phoneValidate = (phone) => {
        const clearPhone = phone.replace(/\D/g, '');
        if (clearPhone.length !== 11)
            return false;
        return '+7' + clearPhone.slice(1);
    }

    const onFocus = (e) => {
        if (!isShowErrMessage[e.target.name])
            return;
        setIsShowErrMessage(prevState => ({...prevState, [e.target.name]: false}));
    }

    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const isDisabledSendOrder = isEmptyObjProp(form) || isLoading || isSuccess;

    return (
        <>
            {isError && !isLoading && <Alerts message={ERROR_SEND_ORDER} type="danger"/>}
            <div className="card" style={{maxWidth: "30rem", margin: " 0 auto"}}>
                <form className="card-body" onSubmit={(e) => handleSubmitForm(e)}>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <Input className="form-control"
                               onFocus={(e) => onFocus(e)}
                               onChange={(e) => handleInputChange(e)} name="phone" id="phone"
                               placeholder="Ваш телефон" required/>
                        {isShowErrMessage.phone && <p className="text-danger">Введите корректный номер телефона</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <Input className="form-control"
                               onFocus={(e) => onFocus(e)}
                               onChange={(e) => handleInputChange(e)} name="address" id="address"
                               placeholder="Адрес доставки" required/>
                    </div>
                    <div className="form-group form-check">
                        <Input type="checkbox" onChange={(e) => handleInputChange(e)} name="agreement"
                               className="form-check-input" id="agreement" required/>
                        <label className="form-check-label" htmlFor="agreement">Согласен с правилами
                            доставки</label>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary" disabled={isDisabledSendOrder}>Оформить
                    </button>
                    {isLoading && <Loader/>}
                </form>
            </div>
        </>

    );
};

export default OrderForm;