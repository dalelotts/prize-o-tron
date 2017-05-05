import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupeventComponent } from './meetupevent.component';

import { MaterialModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

describe('MeetupeventComponent', () => {
  let component: MeetupeventComponent;
  let fixture: ComponentFixture<MeetupeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MaterialModule,
        BrowserAnimationsModule,
        HttpModule
      ],
      declarations: [ MeetupeventComponent ]
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
