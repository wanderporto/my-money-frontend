import tabs from "./tabs";

export function selectTab(tabId) {
    console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabToShows = {}
    tabIds.forEach(e => tabToShows[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabToShows
    }
}