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
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
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

export function showUpdate(billingcycle) {
    return [
        showTabs('tabupdate'),
        selectTab('tabupdate'),
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