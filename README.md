# TryPodPlayer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

As a final project for a UX class I'm part of, and inspired by the recent campaign by podcasters to #TryPod, I've decided to complete a project I've had brewing for a while.

While listening to podcasts on various devices, I have had to face a foul choice: A bloated player with decent functionality that caches everything I listen to, killing my device's storage, or a web player, that actually respects how I want to listen to podcasts, one at a time then gone, recycled like so many newspapers, but which lacked much in the way of touch or navigation functionality.

This player seeks to change that. By allowing users to pass this player an RSS URL, and using LocalStorage to store our minimal representation of the RSS feed and the uers's preferences and state within it, we get the best of both worlds. Persistent behavior. Tiny little footprint. Podcasts downloaded fresh each time you access them, which, while not ideal for all cases, is a much safter default than 'endlessly cache and bloat'.

Feature goals for this version:
* Remember current episode playback progress per Podcast (per User)
* Easy to navigate touch friendly player
* Ditto for the archive
* That's it for this version. That's really enough.