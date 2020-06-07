import { Component, Input } from '@angular/core';

@Component({
  selector: 'candy-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
})
export class YoutubePlayerComponent {
  constructor() {
    console.log('youtube loaded');
  }

  @Input() public id = 'LvDYgSWT8F0';

  public get windowContainer() {
    console.log(window.innerWidth);
    if (window.innerWidth < 420) {
      return {
        height: (window.innerWidth - 100) * 0.9,
        width: window.innerWidth * 0.9,
      };
    } else if (420 < window.innerWidth && window.innerWidth < 990) {
      return {
        height: 350,
        width: 450,
      };
    } else {
      return {
        height: 350,
        width: 500,
      };
    }
  }

  public playerVars = {
    cc_lang_pref: 'en',
  };
  private player;
  // @ts-ignore
  private ytEvent;

  public onStateChange(event) {
    this.ytEvent = event.data;
  }
  public savePlayer(player) {
    this.player = player;
  }

  public playVideo() {
    this.player.playVideo();
  }

  public pauseVideo() {
    this.player.pauseVideo();
  }
}
