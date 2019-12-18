import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothPickComponent } from './cloth-pick.component';
import {FormsModule} from '@angular/forms';

describe('ClothPickComponent', () => {
  let component: ClothPickComponent;
  let fixture: ComponentFixture<ClothPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothPickComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
