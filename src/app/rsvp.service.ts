import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Attendee} from './attendee';
import {map} from 'rxjs/operators';

@Injectable()
export class RsvpService {

  constructor(private httpClient: HttpClient) {
  }

  getAttendees(groupName: string, eventId: string): Observable<Attendee[]> {
    // @ts-ignore
    return this.httpClient.get(`https://cors-anywhere.herokuapp.com/https://api.meetup.com/${groupName}/events/${eventId}/rsvps?&photo-host=public&fields=member&response=yes`)
      .pipe(
        map((response: any[]) => {
          return response.map((rsvp) => {
            return {
              name: rsvp.member.name,
              photo: rsvp.member.photo ? rsvp.member.photo.photo_link : 'http://dazedimg.dazedgroup.netdna-cdn.com/786/azure/dazed-prod/1120/0/1120288.jpg',
            };
          });
        })
      )
  }
}
