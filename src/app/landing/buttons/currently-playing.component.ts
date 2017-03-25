import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { AudioPlayerService } from "../../player/index";
import { Podcast, RssState } from "../../stores/index";

@Component({
  selector: 'CurrentlyPlaying',
  template: `<button *ngIf="listening && !listeningLatest" [routerLink]="target">{{listen.title}}<div class="cover" [style.height]="getHeight()"></div></button>`,
  styleUrls: ['./button.less']
})
export class CurrentlyPlaying implements OnInit {
  @Input() feed : RssState;
  latest : Podcast;
  listen : Podcast;
  target : string;
  
  get listening(){
    return !!this.latest;
  }

  get listeningLatest(){
    return this.latest.guid === this.listen.guid;
  }

  constructor(private router:Router, private player:AudioPlayerService) {
  }

  getHeight(){
      let percentComplete = (this.player.currentTime / this.player.duration) * 100;
      return `${percentComplete}%`;
  }

  ngOnInit() {
    this.latest = this.feed.podcasts[0];
    this.listen = this.player.currentItem;
    this.target = `${this.router.url}/play/${this.listen.guid}`;
    console.log("CurrentlyPlaying:listen", this.listen);
  }

}
