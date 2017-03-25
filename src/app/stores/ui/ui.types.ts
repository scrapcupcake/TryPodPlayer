import { RssState, Podcast } from '../rss';

export interface UiState {    
    currentFeedLink? : string,
    currentGuid? : string, //CurrentListeningPodcastGuid
    listeningHistory? : {[key:string] : PlayerState}; //Guid keyed
    archive? : ArchiveState
}

export interface PlayerState {
    guid : string,
    progress : number,
    length : number,
    completed : number,
    prevGuid : string,
    nextGuid : string
}

export interface ArchiveState {
    pos : number;
    filter : string;
    year : number;
}