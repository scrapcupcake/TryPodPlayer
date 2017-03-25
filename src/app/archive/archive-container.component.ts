import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { RssState, ApplicationState } from "../stores/index";
import { currentRssFeedSelector } from "../stores/selectors";

@Component({
  selector: 'ArchiveContainer',
  template: `<archive [feed]="feed$ | async"></archive>`
})
export class ArchiveContainer implements OnInit {
  feed$ : Observable<RssState>; //Todo: Make this an observable from the NGRX store. Later

  constructor(private store :Store<ApplicationState>) {
      this.feed$ = store.select(currentRssFeedSelector);
  }

  ngOnInit() {
  }

}
