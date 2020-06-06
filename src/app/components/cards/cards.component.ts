import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = []; 

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  public showArtist(item: any){

    let artistId; 

    // Para verificar que tenemos el id del artista tanto para la página de home como de search
    if( item.type === 'artist' ){
      artistId = item.id;
    }else{
      artistId = item.artists[0].id;
    }

    // Navegamos a la página de /artist y mandamos el artistId; allá en artist.component debemos de recibir el artistId
    this.router.navigate([ '/artist', artistId ]);

  }

}
