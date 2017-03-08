import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'rsvp-form',
  templateUrl: './rsvp-form.component.html',
  styleUrls: ['./rsvp-form.component.scss']
})
export class RsvpFormComponent implements OnInit {

  rsvpForm:FormGroup;

  constructor(@Inject(FormBuilder) formBuilder: FormBuilder) {
    this.rsvpForm= formBuilder.group({
      meetupApiKey: [ '', Validators.compose([Validators.required, Validators.minLength(11)]) ],
      eventId: ["", Validators.compose([Validators.required, Validators.minLength(11)]) ]
    });

    // this.meetupApiKey = this.rsvpForm.controls.meetupApiKey;
    console.log(this.rsvpForm);

  }

  onSubmit() {
  }


  ngOnInit() {

  }

}
