import {UiState} from "./ui";
import {RssState} from "./rss";
import {RouterState} from '@ngrx/router-store';

export interface ApplicationState {
    uiState : UiState;
    rssStates : RssState[];
    router: RouterState;
}