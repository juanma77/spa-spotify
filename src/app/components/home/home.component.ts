import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public paises: any [] = [];

  constructor(private spotifyService: SpotifyService) {
   this.spotifyService.getNewReleases();
  }

  ngOnInit() {
  }

}
