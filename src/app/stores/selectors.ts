export const currentRssFeedSelector = (state) => {
    return state.uiState.currentFeed.podcasts.find((p) => p.guid === state.uiState.currentGuid);
}