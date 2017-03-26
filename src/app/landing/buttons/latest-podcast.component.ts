import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AudioPlayerService } from "../../player/index";
import { RssState, Podcast, ApplicationState } from "../../stores";
import { Store } from "@ngrx/store";
import { latestDetailsSelector, ButtonViewModel, getHeight } from "./button-view-model.selector";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'LatestPodcast',
  template: `<button [routerLink]="link$ | async">{{(viewModel$ | async).title}}<div class="cover"
    [style.height]="getHeight$ | async"></div></button>`
    ,
  styleUrls: ['./button.less', './newest.less']
})
export class LatestPodcast implements OnInit {
  @Input() feed : RssState;
  viewModel$ : Observable<ButtonViewModel>;
  getHeight$ : Observable<string>;
  link$ : Observable<string[]>

  constructor(private store:Store<ApplicationState>, private player:AudioPlayerService) {
  }

  ngOnInit() {
    this.viewModel$ = this.store.select(latestDetailsSelector);
    this.getHeight$ = this.viewModel$.map((v) => {return getHeight(v.progress, v.length)});
    this.link$ = this.viewModel$.map((v) => {return ["play", v.guid]});
  }

}