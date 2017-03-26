import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { AudioPlayerService } from "../../player";
import { Podcast, RssState, ApplicationState } from "../../stores";
import { ButtonViewModel, currentDetailsSelector, getHeight } from "./button-view-model.selector";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'CurrentlyPlaying',
  template: `<button *ngIf="shouldShow$ | async" [routerLink]="link$ | async">{{(viewModel$ | async).title}}<div class="cover" [style.height]="getHeight$ | async"></div></button>`,
  styleUrls: ['./button.less']
})
export class CurrentlyPlaying implements OnInit {
  @Input() feed : RssState;
  viewModel$ : Observable<ButtonViewModel>;
  getHeight$ : Observable<string>;
  link$ : Observable<string[]>;
  shouldShow$ : Observable<boolean>;
  
  constructor(private store:Store<ApplicationState>, private player:AudioPlayerService) {
  }

  ngOnInit() {
    this.viewModel$ = this.store.select(currentDetailsSelector);
    this.getHeight$ = this.viewModel$.map((v) => {return getHeight(v.progress, v.length)});
    this.link$ = this.viewModel$.map((v) => {return ["play", v.guid]});
    this.shouldShow$ = this.viewModel$.map((v) => !v.listeningLatest);
  }

}
