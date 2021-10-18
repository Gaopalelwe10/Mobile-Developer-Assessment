import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CellphoneKeyboardPage } from './cellphone-keyboard.page';

describe('CellphoneKeyboardPage', () => {
  let component: CellphoneKeyboardPage;
  let fixture: ComponentFixture<CellphoneKeyboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellphoneKeyboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CellphoneKeyboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
