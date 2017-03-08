import {
  Component,
  OnInit,
  Inject
} from '@angular/core';

import { 
  FormBuilder, 
  FormGroup, 
  Validators, 
  FormControl 
} from '@angular/forms';

import {
  RsvpService
} from '../rsvp.service';

@Component({
  selector: 'app-meetupevent',
  templateUrl: './meetupevent.component.html',
  styleUrls: ['./meetupevent.component.scss'],
  providers: [RsvpService]
})
export class MeetupeventComponent implements OnInit {

  events: Object[]
  meetupForm:FormGroup;

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder, private rsvpService: RsvpService) {
    this.events = [{
      event_id: null
    }]

    this.meetupForm = formBuilder.group({
      meetupApiKey: [ '', Validators.compose([Validators.required, Validators.minLength(11)]) ],
      eventId: ["", Validators.compose([Validators.required, Validators.minLength(11)]) ]
    });

    console.log(this.meetupForm);
  }

  ngOnInit() {}

  addEvent() {
    this.events.push({
      event_id: null
    })
  }
  
  importNames(apiKey:FormControl, eventId:FormControl) {
    alert(apiKey.value + ", " + eventId.value);
  }
}
