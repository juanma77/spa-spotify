import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  // Recibe el valor de nuestro uri y definimos nuestra constante para dicho uri
  transform( value: string): any {
    
    const url = 'https://open.spotify.com/embed?uri='; 
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
