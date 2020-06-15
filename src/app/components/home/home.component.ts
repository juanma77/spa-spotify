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

  public error: boolean; 

  public errorMessage: string;

  constructor(private spotifyService: SpotifyService) {

    this.loading = true; 
    this.error = false; 

    this.spotifyService.getNewReleases().subscribe((res: any) =>{

      // El subscribe tiene dos partes: el caso cuando la data se obtiene exitosamente 
      this.newSongs = res; 
      this.loading = false;

      // El caso cuando la data no se obtiene exitosamente y existe un error 
    }, (err) =>{
      
      this.error = true;
      console.log(err);
      this.errorMessage = err.error.error.message;
    });
  
  }

  ngOnInit() {
  }

}
