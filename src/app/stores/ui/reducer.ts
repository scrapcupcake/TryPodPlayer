import { UiState, PlayerState } from "./ui.types";
import { Action } from "@ngrx/store";
import { RSS_SELECTED, PODCAST_SELECTED, PODCAST_MEDIA_UPDATE } from "../actions";

export function uiReducer(state: UiState = {listeningHistory: []}, action:Action) {
  switch(action.type){
    case RSS_SELECTED:
      if(state.currentFeedLink != action.payload){
        return Object.assign(state,{currentFeedLink:  action.payload, currentGuid: undefined}) as UiState;
      }
      return state;
    case PODCAST_SELECTED:
      return Object.assign(state, {currentGuid: action.payload}) as UiState;
    case PODCAST_MEDIA_UPDATE:
      let newHistory = [...state.listeningHistory];
      let ps : PlayerState = action.payload as PlayerState;
      let psi : number = state.listeningHistory.findIndex((h) => h.guid === ps.guid);
      if(psi > -1 ) { newHistory.splice(psi,1); }
      newHistory.push(ps);
      return Object.assign(state, {listeningHistory: newHistory}) as UiState;
    default:
    return state;
  }
}