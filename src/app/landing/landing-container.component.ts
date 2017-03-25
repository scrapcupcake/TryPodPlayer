import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { RssSelected, ApplicationState, RssState } from "../stores";


@Component({
  selector: 'landing-container',
  template: '<app-landing [feed]="currentFeed$ | async"></app-landing>'
})
export class LandingContainer implements OnInit {
  currentFeed$ : Observable<RssState>; //TODO: The NGRX store thing. Later.

  constructor(private router:Router, private route:ActivatedRoute, private store:Store<ApplicationState>) {
      
      this.route.params.subscribe((params:Params) => {
        let id = decodeURIComponent(params['id']);
        console.log("LandingContainer:id", id);
        this.currentFeed$ = store.select((store) => store.rssStates.find((s) => s.link === id));
        this.currentFeed$.subscribe((feed) => store.dispatch(new RssSelected(feed.link)));
    });
  }

  ngOnInit() {
  }

}
