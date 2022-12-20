export const companyContacts = [
    {
        isActive: true,
        isMainOffice: true,
        contactPhone: '+7 495 79 03 5 03',
        email: 'office@bosanoga.ru',
        city: 'г. Москва',
        address: 'Варшавское шоссе, д. 17, бизнес-центр W Plaza',
        workTime: {
            time: 'с 09-00 до 21-00',
            schedule: 'Eжедневно'
        }
    }
];

export const mainOfficeContacts = companyContacts.filter(office => !!office.isMainOffice && !!office.isActive)[0];
