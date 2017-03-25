export interface RssState {
    latestPodcastGuid? : string,
    title? : string,
    description? : string,
    link? : string,
    feedUrl? : string,
    iconUrl? : string,
    podcasts? : Array<Podcast>
}

export interface Podcast {
  title: string,
  text: string,
  guid: string,
  url: string,
  media: {url: string, length: number, type: string},
  pubDate: string //Todo, not string? Too much work to make a converter when I'm not using this yet
}