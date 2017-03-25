// Import RxJs required methods
import 'rxjs/add/observable/bindNodeCallback';
import { Observable } from 'rxjs/Rx';
import { Podcast, RssState } from "./rss.types";

//Parser, which is a Node module, requires special handling
interface ParserInterface {
  parseString(value:string, callback: {(err:any,result:any)});
}

let parser : ParserInterface = require('rss-parser');
let parserCurry = Observable.bindNodeCallback(parser.parseString);

function parsePodcastItem(item) : Podcast {
    return <Podcast>{
        title: item.title,
        text: item.contentSnippet,
        guid: item.guid,
        url: item.link,
        media: item.enclosure,
        pubDate: item.pubDate
    };
}

export function readFeed(text) : Observable<RssState> {
    let readObs$ : Observable<RssState> = parserCurry(text).map((result) =>{
        let feed : RssState = {title: result.feed.title,
            description: result.feed.description,
            link: result.feed.link,
            feedUrl: result.feed.feedUrl,
            iconUrl: result.feed.itunes.image
        };
        feed.podcasts = Array.from<any>(result.feed.entries).map<Podcast>(parsePodcastItem);
        return feed;
    });
    return readObs$;
}