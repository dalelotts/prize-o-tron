import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MeetupeventComponent} from './meetupevent.component';

import {MatInputModule} from '@angular/material/input';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RsvpService} from '../rsvp.service';
import {from, throwError} from 'rxjs';

describe('MeetupeventComponent', () => {
  let attendeesSpy: jasmine.Spy;
  let component: MeetupeventComponent;
  let fixture: ComponentFixture<MeetupeventComponent>;


  const mockAttendees = [
    {
      'name': 'Brian H.',
      photo: 'http://dazedimg.dazedgroup.netdna-cdn.com/786/azure/dazed-prod/1120/0/1120288.jpg'
    },
    {
      'name': 'Danial J.',
      photo: 'http://dazedimg.dazedgroup.netdna-cdn.com/786/azure/dazed-prod/1120/0/1120288.jpg'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientTestingModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        ReactiveFormsModule,
      ],
      declarations: [MeetupeventComponent],
      providers: [RsvpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const rsvpService = TestBed.get(RsvpService);
    attendeesSpy = spyOn(rsvpService, 'getAttendees').and.returnValue(from([mockAttendees]));
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('importNames gets attendees list from rsvp service ', () => {
    component.importNames('sample-group', '8675309');
    fixture.detectChanges();

    expect(attendeesSpy).toHaveBeenCalledWith('sample-group', '8675309');
    expect(component.attendees).toEqual(mockAttendees);
  });

  it('importNames displays an alert if an error happens', () => {
    const alertSpy = spyOn(window, 'alert');
    const rsvpService: RsvpService = TestBed.get(RsvpService);
    (rsvpService.getAttendees as jasmine.Spy).and.returnValue(throwError(new Error('Oh no! Something went wrong.')));

    component.importNames('sample-group-two', '5678');
    fixture.detectChanges();

    expect(attendeesSpy).toHaveBeenCalledWith('sample-group-two', '5678');
    expect(alertSpy).toHaveBeenCalled();
  });

  it('selectWinner selects a winner and sets shame to falls', () => {

    const oldWinner = {name: 'old-winner', photo: ''};
    component.winner = oldWinner;
    component.shame = true;
    component.attendees = mockAttendees;

    component.selectWinner();
    fixture.detectChanges();

    expect(component.winner).not.toEqual(oldWinner);
    expect(component.shame).toBe(false);
    expect(component.attendees).not.toContain(component.winner);
  });
});
