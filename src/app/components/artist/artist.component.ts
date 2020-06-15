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

  public topTracks: any [] = [];

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) { 
    this.loading = true;
    
    this.router.params.subscribe(params =>{
      // Recibimos el artistId aquí desde cards.component
      console.log(params['id']);

      // Obtenemos los parámetros que sería sólo el id; pero con esto se nos devuelve toda la información del artista
      this.getArtist(params ['id']);

      // Obtenemos los top tracks de acuerdo a un id que pertenece a un artista 
      this.getTopTracks( params['id'] );
    });
    

  }

  ngOnInit() {
  }

  // Obtenemos el artista ; artist puede ser "res"; el nombre no importa
  public getArtist(id: string){
    
    this.spotifyService.getArtist(id).subscribe(artist =>{
      console.log(artist);

      this.artist = artist; 
      this.loading = false; 
    });
    
  }

  // Obtenemos los top tracks de un artista; aquí llamamos al método que hace esto y que está en el servicio spotify.service
  public getTopTracks( id: string ){

    this.spotifyService.getTopTracks( id ).subscribe(topTracks =>{

      console.log(topTracks);
      this.topTracks = topTracks; 
      

    });

  }

}
