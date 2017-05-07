import {
  Component
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

  private attendees: Attendee[];

  constructor(private rsvpService: RsvpService) {
  }

  importNames(apiKey, eventId) {
    this.rsvpService.getAttendees(apiKey, eventId)
      .subscribe(res => {
        this.attendees = res;
      });
  }
}
