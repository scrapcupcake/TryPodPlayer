import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AudioPlayerService } from "../../player/index";
import { RssState, Podcast } from "../../stores/index";

@Component({
  selector: 'LatestPodcast',
  template: `<button [routerLink]="target">{{latest.title}}<div class="cover" [style.height]="getHeight()"></div></button>`,
  styleUrls: ['./button.less', './newest.less']
})
export class LatestPodcast implements OnInit {
  @Input() feed : RssState;
  listen : Podcast;
  latest : Podcast;
  target : string;

  constructor(private router:Router, private route:ActivatedRoute, private player:AudioPlayerService) {
  }

  getHeight(){
    if(!this.listen || this.listen.guid !== this.latest.guid){
        return "0%";
      }

      let percentComplete = (this.player.currentTime / this.player.duration) * 100;
      return `${percentComplete}%`;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log("LatestPodcast:feed", this.feed);
      this.listen = this.player.currentItem;
      this.latest = this.feed.podcasts[0];
      this.target = `${this.router.url}/play/${this.latest.guid}`;
      console.log("LatestPodcast:url?", this.target);
    });
  }

}