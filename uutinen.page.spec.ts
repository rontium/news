import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UutinenPage } from './uutinen.page';

describe('UutinenPage', () => {
  let component: UutinenPage;
  let fixture: ComponentFixture<UutinenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UutinenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UutinenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
