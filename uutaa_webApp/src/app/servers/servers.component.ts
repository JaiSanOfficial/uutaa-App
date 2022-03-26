import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  newServerName = '';
  serversToPush = ['Server1', 'Server2'];
  isNewServerAddedByButtonClickEvent = false;
  constructor() { }

  ngOnInit(): void { }

  onServerAdd()
  {
    this.serversToPush.push(this.newServerName);
    this.isNewServerAddedByButtonClickEvent = true;
  }
}
