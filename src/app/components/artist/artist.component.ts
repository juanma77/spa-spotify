import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artist: any = {};

  public loading: boolean;

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) { 
    this.loading = true;
    
    this.router.params.subscribe(params =>{
      // Recibimos el artistId aquí desde cards.component
      console.log(params['id']);

      // Obtenemos los parámetros que sería sólo el id; pero con esto se nos devuelve toda la información del artista
      this.getArtist(params ['id']);
    });
    

  }

  ngOnInit() {
  }

  public getArtist(id: string){
    
    // Obtenemos el artista ; artist puede ser "res"; el nombre no importa
    this.spotifyService.getArtist(id).subscribe(artist =>{
      console.log(artist);
      this.artist = artist; 
      this.loading = false; 
    });
    
  }

}
