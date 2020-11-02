import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KalendarPage } from './kalendar.page';

describe('KalendarPage', () => {
  let component: KalendarPage;
  let fixture: ComponentFixture<KalendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
