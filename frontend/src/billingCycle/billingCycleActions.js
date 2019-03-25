import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles?sort=year`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function createBc(values) {
  return submit(values, 'post')
}

export function updateBc(values) {
  return submit(values, 'put')
}

export function deleteBc(values) {
  return submit(values, 'delete')
}


function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : '';
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        dispatch(init())
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Erro', error))
      })
  }
}

export function showTab(tab, billingCycle) {
  return [
    showTabs(tab),
    selectTab(tab),
    initialize('billingCycleForm', billingCycle)
  ]
}

