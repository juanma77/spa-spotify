import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpService: HttpClient) {
    console.log("Service ready!");
  }

  public getQuery(query: string){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCtmw4rVr7KZIzrPEOh-NqOc9gkHpRO6bux-TMOHLbwxqNaz0Y6Ew7lhL8GM0Sy0qZZOEihFFL0RbaUOEE' 
    });

    return this.httpService.get(url, { headers });
    
  }

  // Obtener los new releases; debemos poner los Headers pues si no marca error de autorización 
  public getNewReleases(){

    // Pipe es para transformar datos y el map para filtrar la información que nos interesa; para no recibir toda
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data =>{
      return data['albums'].items;
    }));

  }

  // Obtener un conjunto de artistas de acuerdo a un termino de búsqueda 
  public getArtists(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe(map (data =>{
      return data['artists'].items;
    }));

  }

   // Obtener un artista de acuerdo a un termino de búsqueda 
   public getArtist(id: string){

    // No hace falta el pipe pues no necesitamos transformar o filtrar la información pues esta ya viene completa tal como la necesitamos
    return this.getQuery(`artists/${ id }`);

  }
}
