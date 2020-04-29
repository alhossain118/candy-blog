import { Component, Input } from "@angular/core";

@Component({
  selector: "candy-youtube-player",
  templateUrl: "./youtube-player.component.html",
  styleUrls: ["./youtube-player.component.scss"],
})
export class YoutubePlayerComponent {
  @Input() public id = "LvDYgSWT8F0";

  public playerVars = {
    cc_lang_pref: "en",
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
