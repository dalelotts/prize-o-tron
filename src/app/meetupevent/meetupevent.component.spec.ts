import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { MeetupeventComponent } from './meetupevent.component';
import { ExtendedInputComponent } from '../extended-input/extended-input.component';

describe('MeetupeventComponent', () => {
  let component: MeetupeventComponent;
  let fixture: ComponentFixture<MeetupeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MeetupeventComponent,
        ExtendedInputComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
