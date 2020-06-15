import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newSongs: any[] = [];

  public loading: boolean;

  constructor(private spotifyService: SpotifyService) {

    this.loading = true; 

    this.spotifyService.getNewReleases().subscribe((res: any) =>{
      this.newSongs = res; 
      this.loading = false; 
    
   });
  }

  ngOnInit() {
  }

}
