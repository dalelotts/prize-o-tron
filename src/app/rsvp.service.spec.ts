import {TestBed} from '@angular/core/testing';

import {RsvpService} from './rsvp.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('RsvpService', () => {

  let httpTestingController: HttpTestingController;
  let service: RsvpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        HttpClientTestingModule],
      providers: [RsvpService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(RsvpService);
  });

  it('should transform meetup api response', () => {
    const mockResponse = [
      {
        'created': 1572984595000,
        'event': {
          'id': '265685287',
          'name': 'November Hack Night: Prize-o-tron / Meetup Alternatives?',
          'time': 1573086600000,
          'utc_offset': -21600000,
          'yes_rsvp_count': 11
        },
        'group': {
          'group_photo': {
            'base_url': 'https://secure.meetupstatic.com',
            'highres_link': 'https://secure.meetupstatic.com/photos/event/e/0/8/0/highres_323157472.jpeg',
            'id': 323157472,
            'photo_link': 'https://secure.meetupstatic.com/photos/event/e/0/8/0/600_323157472.jpeg',
            'thumb_link': 'https://secure.meetupstatic.com/photos/event/e/0/8/0/thumb_323157472.jpeg',
            'type': 'event'
          },
          'id': 11355542,
          'join_mode': 'approval',
          'localized_location': 'Saint Paul, MN',
          'members': 1404,
          'name': 'AngularMN',
          'status': 'active',
          'urlname': 'AngularMN',
          'who': 'Angular Users'
        },
        'guests': 0,
        'member': {
          'event_context': {
            'host': false
          },
          'id': 213037717,
          'name': 'Brian H.',
          'photo': {
            'base_url': 'https://secure.meetupstatic.com',
            'highres_link': 'https://secure.meetupstatic.com/photos/member/3/8/1/5/highres_260174357.jpeg',
            'id': 260174357,
            'photo_link': 'https://secure.meetupstatic.com/photos/member/3/8/1/5/member_260174357.jpeg',
            'thumb_link': 'https://secure.meetupstatic.com/photos/member/3/8/1/5/thumb_260174357.jpeg',
            'type': 'member'
          }
        },
        'response': 'yes',
        'updated': 1572984595000,
        'venue': {
          'address_1': '178 East 9th St',
          'city': 'St. Paul',
          'country': 'us',
          'id': 17620382,
          'lat': 44.95132827758789,
          'localized_country_name': 'USA',
          'lon': -93.09163665771484,
          'name': 'Virtuwell Office',
          'repinned': true,
          'state': 'MN',
          'zip': ''
        }
      }
    ];

    const expectedResult = [
      {
        'name': 'Brian H.',
        photo: 'https://secure.meetupstatic.com/photos/member/3/8/1/5/member_260174357.jpeg'
      }
    ];

    service.getAttendees('AngularMN', `1234567890`)
      .subscribe(attendees => {
        expect(attendees).toEqual(expectedResult);
      });

    const request = httpTestingController.expectOne('https://cors-anywhere.herokuapp.com/https://api.meetup.com/AngularMN/events/1234567890/rsvps?&photo-host=public&fields=member&response=yes');

    expect(request.request.method).toEqual('GET');

    request.flush(mockResponse);
  });

  it('uses 💩 picture if no photo is available', () => {
    const mockResponse = [
      {
        'created': 1572984595000,
        'event': {
          'id': '265685287',
          'name': 'November Hack Night: Prize-o-tron / Meetup Alternatives?',
          'time': 1573086600000,
          'utc_offset': -21600000,
          'yes_rsvp_count': 11
        },
        'group': {
          'group_photo': {
            'base_url': 'https://secure.meetupstatic.com',
            'highres_link': 'https://secure.meetupstatic.com/photos/event/e/0/8/0/highres_323157472.jpeg',
            'id': 323157472,
            'photo_link': 'https://secure.meetupstatic.com/photos/event/e/0/8/0/600_323157472.jpeg',
            'thumb_link': 'https://secure.meetupstatic.com/photos/event/e/0/8/0/thumb_323157472.jpeg',
            'type': 'event'
          },
          'id': 11355542,
          'join_mode': 'approval',
          'localized_location': 'Saint Paul, MN',
          'members': 1404,
          'name': 'AngularMN',
          'status': 'active',
          'urlname': 'AngularMN',
          'who': 'Angular Users'
        },
        'guests': 0,
        'member': {
          'event_context': {
            'host': false
          },
          'id': 213037717,
          'name': 'Brian H.'
        },
        'response': 'yes',
        'updated': 1572984595000,
        'venue': {
          'address_1': '178 East 9th St',
          'city': 'St. Paul',
          'country': 'us',
          'id': 17620382,
          'lat': 44.95132827758789,
          'localized_country_name': 'USA',
          'lon': -93.09163665771484,
          'name': 'Virtuwell Office',
          'repinned': true,
          'state': 'MN',
          'zip': ''
        }
      }
    ];

    const expectedResult = [
      {
        'name': 'Brian H.',
        photo: 'http://dazedimg.dazedgroup.netdna-cdn.com/786/azure/dazed-prod/1120/0/1120288.jpg'
      }
    ];

    service.getAttendees('UnhappyAttendee', `0987654321`)
      .subscribe(attendees => {
        expect(attendees).toEqual(expectedResult);
      });

    const request = httpTestingController.expectOne('https://cors-anywhere.herokuapp.com/https://api.meetup.com/UnhappyAttendee/events/0987654321/rsvps?&photo-host=public&fields=member&response=yes');

    expect(request.request.method).toEqual('GET');

    request.flush(mockResponse);
  });
});
