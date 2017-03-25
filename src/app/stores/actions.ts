import { Action } from '@ngrx/store';
import { RssState, Podcast } from "./rss";

export const LOAD_RSS_DATA = "LOAD_RSS_DATA";
export const STORE_RSS_DATA = "STORE_RSS_DATA";
export const LOAD_PODCAST_AUDIO = "LOAD_PODCAST_AUDIO";
export const RSS_SELECTED = "RSS_SELECTED";
export const PODCAST_SELECTED = "PODCAST_SELECTED";

export class LoadRssData implements Action {
    readonly type = LOAD_RSS_DATA;
    constructor(public payload:string){ //RSS Url is payload
    }
}

export class StoreRssData implements Action {
    readonly type = STORE_RSS_DATA;
    constructor(public payload:RssState){}
}

export class LoadPodcastAudio implements Action{
    readonly type = LOAD_PODCAST_AUDIO;
    constructor(public payload:string){} //RSS Guid
}

export class RssSelected implements Action{
    readonly type = RSS_SELECTED;
    constructor(public payload:RssState){} //RSS url/id key
}

export class PodcastSelected implements Action {
    readonly type = PODCAST_SELECTED;
    constructor(public payload:Podcast){}
}