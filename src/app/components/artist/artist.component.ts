import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private router: ActivatedRoute) { 
    
    this.router.params.subscribe(params =>{
      // Recibimos el artistId aquí desde cards.component
      console.log(params['id']);
    });

  }

  ngOnInit() {
  }

}
