import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { Store } from "@ngrx/store";
import { RssSelected, ApplicationState, RssState, currentRssFeedSelector } from "../stores";


@Component({
  selector: 'landing-container',
  template: '<app-landing [feed]="currentFeed$ | async"></app-landing>'
})
export class LandingContainer implements OnInit {
  currentFeed$ : Observable<RssState>; //TODO: The NGRX store thing. Later.

  constructor(private store:Store<ApplicationState>) {
      this.currentFeed$ = store.select(currentRssFeedSelector);      
  }

  ngOnInit() {
  }

}
