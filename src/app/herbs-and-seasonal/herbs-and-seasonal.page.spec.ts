import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HerbsAndSeasonalPage } from './herbs-and-seasonal.page';

describe('HerbsAndSeasonalPage', () => {
  let component: HerbsAndSeasonalPage;
  let fixture: ComponentFixture<HerbsAndSeasonalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbsAndSeasonalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HerbsAndSeasonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
