import { combineReducers } from 'redux'

import DashboardReducers from '../dashboard/dashboardreducers'
import TabReducer from '../common/tab/tabreducer'
import BillingCycleReducer from '../billingCycle/billingcyclereducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducers,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
})

export default rootReducer;