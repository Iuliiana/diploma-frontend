// export const isEmptyObjParams = (obj) => {
//     return !Object.keys(obj).every(key => obj[key] !== null && obj[key] !== '');
// }
//
// export const isObject = (val) => {
//     return typeof val === 'object' && !Array.isArray(val);
// }

export const isEmpty = (obj) => {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

export const isBetween = (x, min, max) => {
    return x >= min && x <= max;
}

export const resizeImg = (file, resizeParams) => {
    let resizeImg = {originalSource: '', resize: {}};

    return new Promise(resolve => {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = resolve;
    }).then((result) => {
        return new Promise(resolve => {
            let newImg = new Image();
            newImg.src = resizeImg.originalSource = result.currentTarget.result;
            newImg.onload = resolve;
        })
    }).then((result) => {
        let canvas = document.createElement('canvas');
        Object.keys(resizeParams).forEach((size) => {
            canvas.width = resizeParams[size].width
            canvas.height = resizeParams[size].height

            const context = canvas.getContext('2d');
            context.drawImage(result.currentTarget, 0, 0, resizeParams[size].width, resizeParams[size].height);
            resizeImg.resize[size] = context.canvas.toDataURL('image/jpeg', 90)
        })
        return (resizeImg)
    })
}