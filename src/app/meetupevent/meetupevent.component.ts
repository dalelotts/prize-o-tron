import {Component, OnDestroy} from '@angular/core';

import {RsvpService} from '../rsvp.service';

import {Attendee} from '../attendee';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
