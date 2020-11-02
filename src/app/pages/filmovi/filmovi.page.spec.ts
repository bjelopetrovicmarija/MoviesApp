import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmoviPage } from './filmovi.page';

describe('FilmoviPage', () => {
  let component: FilmoviPage;
  let fixture: ComponentFixture<FilmoviPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmoviPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmoviPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
