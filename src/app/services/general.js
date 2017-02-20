import toastr from '../../config/modules';
import {history} from '../../config/store';

export function entityCreated(toast,redirectTo){
    toastr.success(toast);
    if(redirectTo) {
        history.push(redirectTo);
    }
}

export function entityDeleted(toast,redirectTo){
    toastr.success(toast);
    if(redirectTo) {
        history.push(redirectTo);
    }
}

export function entityUpdated(toast){
    toastr.success(toast);
}

export function entityReceived(toast){
    toastr.success(toast);
}


export function filterFormValues(formValues, allowedKeys){
    let clonedFormValues = Object.assign({}, formValues);
    let allowedValues={};

    allowedKeys.map((field, i) => {
        let value;
        try {
            value = eval('formValues.' + field);
            //console.log(field, value);
            // allowedValues.field=value;


            setObjByString(allowedValues,field,value);
            //index(allowedValues,field,value);

        } catch (e) {
        }

    });
    // Object.keys(allowedValues).map(x => allowedValues[x]);
    // console.log(allowedValues);

    // allowedValues.detailData = Object.values(allowedValues.detailData);
    // console.log(allowedValues);

    return allowedValues;

    //povodne
    // let clonedFormValues = Object.assign({}, formValues);
    //return allowedKeys.reduce((a, b) =>{ a[b]=clonedFormValues[b] ; return a},{});
}


export function setObjByString(obj, str, val) {
    let keys, key;
    //make sure str is a string with length
    if (!str || !str.length || Object.prototype.toString.call(str) !== "[object String]") {
        return false;
    }
    if (obj !== Object(obj)) {
        //if it's not an object, make it one
        obj = {};
    }
    keys = str.split(".");
    while (keys.length > 1) {
        key = keys.shift();
        if (obj !== Object(obj)) {
            //if it's not an object, make it one
            obj = {};
        }
        if (!(key in obj)) {
            //if obj doesn't contain the key, add it and set it to an empty object
            obj[key] = {};
        }
        obj = obj[key];
    }
    return obj[keys[0]] = val;
}


export function index(obj,is, value) {
    if (typeof is == 'string')
        return index(obj,is.split('.'), value);
    else if (is.length==1 && value!==undefined)
        return obj[is[0]] = value;
    else if (is.length==0)
        return obj;
    else
        return index(obj[is[0]],is.slice(1), value);
}