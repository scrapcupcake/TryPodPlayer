import { ApplicationState } from "./application.types";
import { RssState, Podcast } from "./rss";

export const currentRssFeedSelector = (state: ApplicationState) : RssState => {
    let selectedFeed = state.rssStates.find((f) => state.uiState.currentFeedLink === f.link );
    console.log("currentRssFeedSelector:",selectedFeed,state);
    return selectedFeed;
}

export const currentPodcastSelector = (state:ApplicationState) : Podcast => {
    let currentFeed = currentRssFeedSelector(state);
    if(!!currentFeed){
        return currentFeed.podcasts.find((p) => p.guid === state.uiState.currentGuid);
    }
    return undefined;
}