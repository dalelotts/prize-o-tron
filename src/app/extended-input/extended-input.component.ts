import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'extended-input',
  templateUrl: './extended-input.component.html',
  styleUrls: ['./extended-input.component.scss']
})
export class ExtendedInputComponent implements OnInit {

  @Input()
  labelText:string = '';
  @Input()
  control:FormControl;

  isError(field) {
    return !field.valid && field.touched;
  }

  isValid(field) {
    return field.valid;
  }

  constructor() { }

  ngOnInit() {
  }

}
