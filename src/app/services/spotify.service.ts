import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("listo");
  }

  getQuery(query: string){
    const url= `https://api.spotify.com/v1/${ query }`;

    const headers =  new HttpHeaders({
      'Authorization' : 'Bearer BQCEWAC2ILgysvJlNR0gpckQKusZn-nQXXy1-w3V66KZsPmtF3PJm2FVpwjDTLaFxqlmjSfaBTOtFBOZFAU'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
          .pipe( map( data => data['albums'].items ));
  }

  getArtista(termino: string){
    return this.getQuery(`search?q=${ termino }&type=artist&offset=15`)
          .pipe( map( data => data['artists'].items ));
  }
}
