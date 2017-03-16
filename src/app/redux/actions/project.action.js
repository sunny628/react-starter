import * as constants from '../constants';


export function projectReceived(data) {
    return {
        type: constants.PROJECT_RECEIVED,
        data
    }
}

export function projectCreated(data) {
    return {
        type: constants.PROJECT_CREATED,
        data
    }
}

export function projectUsersUpdated(data) {
    return {
        type: constants.PROJECT_USERS_UPDATED,
        data
    }
}

export function projectUserRemoved(data,config) {
    return {
        type: constants.PROJECT_USER_REMOVED,
        data,
        config
    }
}




