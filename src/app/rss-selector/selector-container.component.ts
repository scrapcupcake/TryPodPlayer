import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from "@ngrx/store";
import { ApplicationState, RssState } from "../stores/index";
import { Observable } from "rxjs/Observable";
import { LoadRssData } from "../stores/actions";


//TODO: Make this use the NGRX store. Later.
@Component({
    selector: "selector-container",
    template: `<rss-selector [feeds]="feeds$ | async" (add)="addFeed($event)"></rss-selector>`
})
export class SelectorContainer implements OnInit {
    feeds$ : Observable<RssState[]> = this.store.select('rssStates');

    constructor(private store : Store<ApplicationState>){
    }

    ngOnInit(){
        this.feeds$.subscribe(state => console.log("Feeds$?", state));
    }

    addFeed(feedUrl){
        this.store.dispatch(new LoadRssData(feedUrl));
    }

}