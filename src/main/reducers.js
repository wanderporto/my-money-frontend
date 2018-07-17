import { combineReducers } from 'redux'

import DashboardReducers from '../dashboard/dashboardreducers'
import TabReducer from '../common/tab/tabreducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducers,
    tab: TabReducer
})

export default rootReducer;