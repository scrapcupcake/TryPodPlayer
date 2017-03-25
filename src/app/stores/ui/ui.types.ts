import { RssState, Podcast } from "../index";

export interface UiState {    
    currentFeed : RssState,
    currentPodcast : Podcast,
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