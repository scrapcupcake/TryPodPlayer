import { Injectable } from "@angular/core";
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { LOAD_RSS_DATA, StoreRssData } from "../actions";
import { Observable } from "rxjs/Observable";
import { empty } from "rxjs/observable/empty";
import { Http, Response } from "@angular/http";
import { readFeed } from "./parser";
import { RssState } from "./rss.types";
import { of } from "rxjs/observable/of";


function isBad(url){
    return url === ''; //TODO: more checks
}

@Injectable()
export class RssEffects{
    @Effect() loadRssFromServer$ : Observable<Actions> = 
    this.actions$.ofType(LOAD_RSS_DATA)
    .debounceTime(300)
    .map(toPayload)
    .switchMap(url => {
        if(isBad(url)){
            return empty(); //TODO: Remap ourselves to the future search on bad searches
        }
        
        return this.getFeed(url).map((feed) => new StoreRssData(feed));
    });

    constructor(private actions$: Actions, private http: Http){
    }

    getFeed(url) : Observable<RssState> {
        let feed$ = this.http.get(url)
        .flatMap<Response,Observable<RssState>>((res:Response) => {return readFeed(res.text())})
        .publishReplay(1)
        .refCount()
        .catch((error:any) => Observable.throw(error || 'Server error'));
        
        return feed$;
  }
}