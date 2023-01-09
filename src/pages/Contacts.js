import React from 'react';
import {mainOfficeContacts} from "../helper/contacts";
import {clearPhone} from "../helper";

const Contacts = () => {
    return (
        <section className="top-sales">
            <h2 className="text-center">Контакты</h2>
            <p>Наш головной офис расположен в {mainOfficeContacts?.city}, по
                адресу: {mainOfficeContacts?.address}.</p>
            <h5 className="text-center">Координаты для связи:</h5>
            <p>Телефон:&nbsp;
                <a href={`tel:${clearPhone(mainOfficeContacts?.contactPhone)}`}>{mainOfficeContacts?.contactPhone}</a>&nbsp;
                {`(${mainOfficeContacts?.workTime?.schedule.toLowerCase()}: ${mainOfficeContacts?.workTime?.time})`}
            </p>
            <p>Email:&nbsp;
                <a href={`mailto:${mainOfficeContacts?.email}`}>{mainOfficeContacts?.email}</a>
            </p>
        </section>
    );
};

export default Contacts;