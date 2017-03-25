import { UiState } from "./ui.types";
import { Action } from "@ngrx/store";
import { RSS_SELECTED, PODCAST_SELECTED, LOAD_PODCAST_AUDIO } from "../actions";

export function uiReducer(state: UiState, action:Action) {
  switch(action.type){
    case RSS_SELECTED:
      return Object.assign(state,{currentFeed:  action.payload});
    case LOAD_PODCAST_AUDIO:
      return Object.assign(state, {currentGuid: action.payload});
    case PODCAST_SELECTED:
      return Object.assign(state, {currentPodcast: action.payload});
    default:
    return state;
  }
}