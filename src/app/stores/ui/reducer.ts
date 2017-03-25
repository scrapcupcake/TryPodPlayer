import { UiState } from "./ui.types";
import { Action } from "@ngrx/store";
import { RSS_SELECTED, PODCAST_SELECTED } from "../actions";

export function uiReducer(state: UiState = {}, action:Action) {
  switch(action.type){
    case RSS_SELECTED:
      if(state.currentFeedLink != action.payload){
        return Object.assign(state,{currentFeedLink:  action.payload, currentGuid: undefined}) as UiState;
      }
      return state;
    case PODCAST_SELECTED:
      return Object.assign(state, {currentGuid: action.payload}) as UiState;
    default:
    return state;
  }
}