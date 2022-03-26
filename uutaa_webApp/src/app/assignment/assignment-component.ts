import { Component } from "@angular/core";

@Component({
selector:'app-assignment',
templateUrl:'assignment-component.html',
styleUrls:['./assignment-component.css']
})

export class AssignmentComponent
{
    counter = 0;
    show = false;
    eventArray = [] as any;
    DispDetails()
    {
        this.show = !this.show;
        this.eventArray.push(new Date());
    }
}