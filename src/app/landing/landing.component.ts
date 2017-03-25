import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AudioPlayerService } from '../player';
import { Observable } from "rxjs/Observable";
import { RssState } from "../stores/index";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {
  @Input() feed : RssState;

  constructor(private router:Router, private player:AudioPlayerService) {
  }

  get archiveListener() : boolean {
    return !!this.player.currentItem && !!this.feed && !!this.feed.podcasts && this.player.currentItem.url != this.feed.podcasts[0].url;
  }

  navigateToArchive(feed:RssState){
    this.router.navigate(["podcast", encodeURIComponent(feed.link) ,"archive"]);
  }


  ngOnInit() {
    console.log("LandingComponent:feed", this.feed);
  }

}
