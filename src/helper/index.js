// eslint-disable-next-line no-extend-native
Object.defineProperty(String.prototype, 'toCapitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});
export const isObject = (obj) => {
    return obj != null && obj.constructor.name === "Object"
}

export const isEmptyObjProp = (obj) => {
    return !Object.keys(obj).every(key => obj[key] !== null && obj[key] !== '');
}


// export const isEmpty = (obj) => {
//     for (let prop in obj) {
//         if (obj.hasOwnProperty(prop))
//             return false;
//     }
//
//     return true;
// }

export const clearPhone = (phone) => {
    return phone.replace(/[^0-9+]/g, '');
}

export const currencyFormatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currencyDisplay: 'symbol',
});