import {
  Component, Inject
} from '@angular/core';

import {
  RsvpService
} from '../rsvp.service';

import { Attendee } from '../attendee';

@Component({
  selector: 'app-meetupevent',
  templateUrl: './meetupevent.component.html',
  styleUrls: ['./meetupevent.component.scss'],
  providers: [RsvpService]
})
export class MeetupeventComponent {

  public winner: Attendee;
  public shame: boolean;
  private attendees: Attendee[];

  constructor(private rsvpService: RsvpService) {
  }

  public importNames(apiKey, eventId) {
    this.rsvpService.getAttendees(apiKey, eventId)
      .subscribe((res) => {
        console.log(res);
        this.attendees = res;
      });
  }

  public selectRSVP() {
    let index = Math.floor(Math.random() * (this.attendees.length - 1));

    this.shame = false;
    this.winner = this.attendees[index];
    this.attendees.splice(index, 1)[0];
  }

  public shameWinner() {
    this.shame = true;
  }
}
