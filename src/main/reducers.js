import { combineReducers } from 'redux'

import DashboardReducers from '../dashboard/dashboardreducers'

const rootReducer = combineReducers({
    dashboard: DashboardReducers
})

export default rootReducer;