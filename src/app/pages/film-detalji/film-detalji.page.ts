import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-detalji',
  templateUrl: './film-detalji.page.html',
  styleUrls: ['./film-detalji.page.scss'],
})
export class FilmDetaljiPage implements OnInit {

  information = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmServies: FilmService
    ) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.filmServies.getDetails(id).subscribe(result => {
      console.log('details: ', result);
      this.information = result;
    });
  }



}
