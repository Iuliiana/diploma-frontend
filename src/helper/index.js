export const isObject = (obj) => {
    return obj != null && obj.constructor.name === "Object"
}

export const isEmpty = (obj) => {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

export const clearPhone = (phone) => {
    return phone.replace(/[^0-9+]/g, '');
}

