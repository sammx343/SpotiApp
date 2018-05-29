import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  loading: boolean;

  constructor(private Spotify: SpotifyService) { 
  }

  ngOnInit() {
  }

  Buscar(termino: string){
    this.loading = true;
    this.Spotify.getArtistas(termino)
      .subscribe( (data: any) => {
        this.loading = false;
        console.log(data)
        this.artistas = data;
      });
  }

}
