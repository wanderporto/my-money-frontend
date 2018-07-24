import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import DashboardReducers from '../dashboard/dashboardreducers'
import TabReducer from '../common/tab/tabreducer'
import BillingCycleReducer from '../billingCycle/billingcyclereducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducers,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer

})

export default rootReducer;