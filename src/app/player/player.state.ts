import { Podcast } from "../stores/index";

export interface PlayerState {
    url: string;
    currentTime: number;
    mediaDuration: number;
    currentItem : Podcast;
}