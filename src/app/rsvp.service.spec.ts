import { TestBed, inject } from '@angular/core/testing';

import { RsvpService } from './rsvp.service';

import { MaterialModule } from '@angular/material'; // add this line
import { HttpModule } from '@angular/http';


describe('RsvpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule, HttpModule], // and this line
      providers: [RsvpService]
    });
  });

  it('should ...', inject([RsvpService], (service: RsvpService) => {
    expect(service).toBeTruthy();
  }));
});
