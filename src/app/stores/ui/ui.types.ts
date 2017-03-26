import { RssState, Podcast } from '../rss';

export interface UiState {    
    currentFeedLink? : string,
    currentGuid? : string, //CurrentListeningPodcastGuid
    listeningHistory? : PlayerState[];
    archive? : ArchiveState,
}

export interface PlayerState {
    guid : string,
    progress : number,
    length : number,
    completed : number
}

export interface ArchiveState {
    pos : number;
    filter : string;
    year : number;
}