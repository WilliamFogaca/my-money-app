
export function selectTab(tabId) {
  return {
    type: 'TAB_SELECTED',
    payload: tabId
  }
}

export function showTabs(...tabIds) {
  const tabsToshow = {}
  tabIds.forEach(e => tabsToshow[e] = true)
  return {
    type: 'TAB_SHOWED',
    payload: tabsToshow
  }
}