import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public artistas: any[] = [];

  public loading: boolean; 

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit() {
  }

  public searchArtist(termino: string){
    console.log(termino);
    this.loading = true; 

    this.spotifyService.getArtists(termino).subscribe((res:any) =>{
      this.artistas = res;
      this.loading = false;
    })

  }

}
