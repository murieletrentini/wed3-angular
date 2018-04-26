import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wed-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() header: String;
  @Input() message: String;

  constructor() {
  }

  ngOnInit() {
  }

}
