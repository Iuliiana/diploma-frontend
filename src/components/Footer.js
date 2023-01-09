import React from 'react';
import Navigation from "./navigation/Navigation";
import {clearPhone} from "../helper";
import {mainOfficeContacts} from "../helper/contacts";

const Footer = () => {
    return (
        <footer className="container bg-light footer">
            <div className="row">
                <div className="col">
                    <section>
                        <h5>Информация</h5>
                        <Navigation className="nav flex-column" sortType='footer'/>
                    </section>
                </div>
                <div className="col">
                    <section>
                        <h5>Принимаем к оплате:</h5>
                        <div className="footer-pay">
                            <div className="footer-pay-systems footer-pay-systems-paypal"/>
                            <div className="footer-pay-systems footer-pay-systems-master-card"/>
                            <div className="footer-pay-systems footer-pay-systems-visa"/>
                            <div className="footer-pay-systems footer-pay-systems-yandex"/>
                            <div className="footer-pay-systems footer-pay-systems-webmoney"/>
                            <div className="footer-pay-systems footer-pay-systems-qiwi"/>
                        </div>
                    </section>
                    <section>
                        <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
                            аксессуаров.
                            Все права защищены.<br/>Доставка по всей России!
                        </div>
                    </section>
                </div>
                <div className="col text-right">
                    <section className="footer-contacts">
                        <h5>Контакты:</h5>
                        <a className="footer-contacts-phone"
                           href={`tel:${clearPhone(mainOfficeContacts?.contactPhone)}`}>
                            {mainOfficeContacts?.contactPhone}
                        </a>
                        <span className="footer-contacts-working-hours">
                          {`${mainOfficeContacts?.workTime?.schedule}: ${mainOfficeContacts?.workTime?.time}`}
                        </span>
                        <a className="footer-contacts-email"
                           href={`mailto:${mainOfficeContacts?.email}`}>{mainOfficeContacts?.email}</a>
                        <div className="footer-social-links">
                            <div className="footer-social-link footer-social-link-twitter"/>
                            <div className="footer-social-link footer-social-link-vk"/>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    );
};

export default Footer;