import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  token : string;

  constructor(private http: HttpClient) {
    this.token = "QBrgw6s9zqm4aeAB4X34GRNJTkcBuYk82abklidbHd9nNkcia6MaSlqbDTIXXqc1v_GqenxEqyCrAINxoc";
  }

  getQuery(query: string){
    const url= `https://api.spotify.com/v1/${ query }`;

    let headers =  new HttpHeaders({
      'Authorization' : `Bearer ${this.token}`
    });
    
    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=25')
          .pipe( map( data => data['albums'].items ));
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${ termino }&type=artist`)
          .pipe( map( data => data['artists'].items ));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
          //.pipe( map( data => data['artists'].items ));
  }

  getTopTracks(id: string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`);
          //.pipe( map( data => data['artists'].items ));
  } 
}
