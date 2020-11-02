import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-filmovi',
  templateUrl: './filmovi.page.html',
  styleUrls: ['./filmovi.page.scss'],
})
export class FilmoviPage implements OnInit {

  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
  }

  searchChanged(){
    this.results = this.filmService.searchData(this.searchTerm, this.type);
  }

}
