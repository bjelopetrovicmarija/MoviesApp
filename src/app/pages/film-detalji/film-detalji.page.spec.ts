import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmDetaljiPage } from './film-detalji.page';

describe('FilmDetaljiPage', () => {
  let component: FilmDetaljiPage;
  let fixture: ComponentFixture<FilmDetaljiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDetaljiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmDetaljiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
