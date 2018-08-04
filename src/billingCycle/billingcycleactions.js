import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabactions'
import billingcycle from './billingcycle';

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = {

}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function showUpdate(billingcycle) {
    return [
        showTabs('tabupdate'),
        selectTab('tabupdate'),
        initialize('BillingCycleForm', billingcycle)
    ]
}

export function showDelete(billingcycle) {
    return [
        showTabs('tabdelete'),
        selectTab('tabdelete'),
        initialize('BillingCycleForm', billingcycle)
    ]
}

export function init() {
    return [
        showTabs('tablist', 'tabcreate'),
        selectTab('tablist'),
        getList(),
        initialize('BillingCycleForm', INITIAL_VALUES)
    ]
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    const id = values._id ? values._id : ''
    return dispatch => {
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso!')
                dispatch([
                    init()
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            })
    }
}