import { ApplicationState, RssState, currentPodcastSelector, Podcast, currentRssFeedSelector, latestPodcastSelector, PlayerState } from "../../stores";

export interface ButtonViewModel {
    listeningLatest : boolean;
    progress : number,
    length : number,
    title : string,
    guid : string
}

  export function getHeight(progress, length) : string {
      let percentComplete = progress > 0 && length > 0 ? (progress / length) * 100 : 0;
      return `${percentComplete}%`;
  }

export const getPlayerDetailsFor = (state: ApplicationState, guid: string) : PlayerState  => {
    if(!state.uiState.listeningHistory){ state.uiState.listeningHistory = []; }
    return state.uiState.listeningHistory.find((hist) => hist.guid === guid);
}

export const latestDetailsSelector = (state: ApplicationState): ButtonViewModel => {
    let current = currentPodcastSelector(state);
    let latest = latestPodcastSelector(state);
    let latestDetails = getPlayerDetailsFor(state, latest.guid);
    if(latestDetails != undefined){
         return {
            listeningLatest: !current || current.guid === latest.guid,
            progress: latestDetails.progress,
            length: latestDetails.length,
            title: latest.title,
            guid: latest.guid
    };
    }else{
        return {
            listeningLatest: true,
            progress: 0,
            length: 0,
            title: latest.title,
            guid: latest.guid
        }
    }
}

export const currentDetailsSelector = (state: ApplicationState): ButtonViewModel => {
    let current = currentPodcastSelector(state);
    let latest = latestPodcastSelector(state);
    let currentDetails = getPlayerDetailsFor(state, current.guid);
    if(currentDetails != undefined){
         return {
            listeningLatest: !current || current.guid === latest.guid,
            progress: currentDetails.progress,
            length: currentDetails.length,
            title: current.title,
            guid: current.guid
        };
    }else{
        return {
            listeningLatest: true,
            progress: 0,
            length: 0,
            title: "",
            guid: ""
        }
    }
}