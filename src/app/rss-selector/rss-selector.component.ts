import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RssState, Podcast } from "../stores";

@Component({
  selector: 'rss-selector',
  templateUrl: './rss-selector.component.html',
  styleUrls: ['./rss-selector.component.css']
})
export class RssSelector implements OnInit {
  @Input() feeds: RssState[];
  @Output() add : EventEmitter<string> = new EventEmitter<string>();

  addFeed(url){
    this.add.emit(url);
  }

  navigateToFeed(feed:RssState){
    this.router.navigate(["podcast",encodeURIComponent(feed.link)]);
  }
  
  constructor(private router: Router){
  }

  ngOnInit() {
  }

}
