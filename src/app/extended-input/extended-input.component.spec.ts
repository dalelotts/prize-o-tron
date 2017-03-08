import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ExtendedInputComponent } from './extended-input.component';

describe('ExtendedInputComponent', () => {
  let component: ExtendedInputComponent;
  let fixture: ComponentFixture<ExtendedInputComponent>;
  let testContainerEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedInputComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedInputComponent);
    component = fixture.componentInstance;
    testContainerEl = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testContainerEl).toBeTruthy();
  });
});
