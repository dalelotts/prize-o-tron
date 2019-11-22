import {Component} from '@angular/core';

import {RsvpService} from '../rsvp.service';

import {Attendee} from '../attendee';
import {FormControl, FormGroup, Validators} from '@angular/forms';

declare let gtag: Function;

@Component({
  selector: 'app-meetupevent',
  templateUrl: './meetupevent.component.html',
  styleUrls: ['./meetupevent.component.scss'],
})
export class MeetupeventComponent {

  winner: Attendee;
  shame: boolean;
  attendees: Attendee[];
  meetUpDetailForm: FormGroup;

  constructor(private rsvpService: RsvpService) {
    this.meetUpDetailForm = new FormGroup(
      {
        groupName: new FormControl('', [Validators.required]),
        eventId: new FormControl('', Validators.required),
      },
      this.rollupControlErrors
    );
  }

  importNames(groupName: string, eventId: string) {
    gtag('set', {groupName, eventId});
    gtag('event', 'ImportNames', {
      'event_label': groupName,
      'value': eventId
    });

    this.shame = false;
    this.winner = undefined;

    this.rsvpService.getAttendees(groupName, eventId)
      .subscribe(
        response => this.attendees = response,
        error => alert(`Error getting attendees:\n\n${JSON.stringify(error)}`)
      );
  }

  selectWinner() {
    const index = Math.floor(Math.random() * (this.attendees.length - 1));
    this.winner = this.attendees.splice(index, 1)[0];
    this.shame = false;
    gtag('event', 'PickWinner', {
      'event_label': 'winner',
      'value': this.winner.name
    });
  }

  private rollupControlErrors(form: FormGroup) {
    return Object.keys(form.controls)
      .map(controlName => form.get(controlName))
      .reduce((accumulator: any, control: FormControl) => {
          return Object.assign({}, accumulator, control.errors);
        },
        null
      );
  }
}
