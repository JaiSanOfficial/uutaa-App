import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styles : [`
    .online {
        color:white;
    }
    `]
})
export class ServerComponent
{
    serverID =12345;
    serverStatus ='';
    constructor()
    {
        this.serverStatus = Math.random() >0.5?'online':'offline';
    }
    getColorStatus()
    {
        return this.serverStatus === 'online' ? 'green':'red';
    }
}