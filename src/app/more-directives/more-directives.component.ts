import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-directives',
  templateUrl: './more-directives.component.html',
  styleUrls: ['./more-directives.component.css']
})
export class MoreDirectivesComponent implements OnInit {
  toggle_para: boolean = false;

  messages: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addMessage() {
    this.toggle_para = !this.toggle_para;
    this.messages.push('' + new Date());
  }
}
