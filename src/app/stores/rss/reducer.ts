import { Action } from "@ngrx/store";
import { RssState } from './rss.types';
import {STORE_RSS_DATA} from '../actions';

export const reducer = function(state:RssState[], action:Action){
    switch(action.type){
        case STORE_RSS_DATA:
            return [...state,action.payload];
        default:
        return state;
    }
}