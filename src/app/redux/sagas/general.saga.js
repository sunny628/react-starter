import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_ENTITY, CREATE_ENTITY, UPDATE_ENTITY} from '../constants';
import {endAjax, startAjax, asyncError} from '../actions/async.action';
import {defaultGET, defaultRequest} from '../../../api/api';
import {entityUpdated, entityCreated} from '../../services/general';


function *loadEntity(action) {
    yield put(startAjax());
    try {
        let config = action.config;
        const data = yield call(defaultGET, config.url);
        yield put(config.afterEntityReceivedAction(data));
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


function *updateEntity(action) {
    yield put(startAjax());
    try {
        //TODO HOTFIX, api hadze 500 - Attempted to call an undefined method named "setid" of class "API\CoreBundle\Entity\Company"
        delete action.values.id;

        let config = action.config;
        yield call(defaultRequest, config.url, 'PUT', action.values);
        entityUpdated('Updated successfully');
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


function *createEntity(action) {
    yield put(startAjax());
    try {
        let config = action.config;
        yield call(defaultRequest, config.url, 'POST', action.values);
        entityCreated('Created successfully', config.redirectAfterCreation );
    } catch (e) {
        yield put(asyncError(e));
    }
    yield put(endAjax());
}


export function *createEntityDefault() {
    yield takeLatest(CREATE_ENTITY, createEntity);
}


export function *loadEntityDefault() {
    yield takeLatest(REQUEST_ENTITY, loadEntity);
}

export function *updateEntityDefault() {
    yield takeLatest(UPDATE_ENTITY, updateEntity);
}

