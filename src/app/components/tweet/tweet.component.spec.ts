import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TweetComponent } from './tweet.component';

describe('TweetComponent', () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
