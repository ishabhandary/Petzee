import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showGrid:number=1;

  constructor() { }

  ngOnInit(): void {
  }

  openCalenderDialog()
  {

  }

  SelectChange(event:any){
      console.log(event);
  }

  newAppointment()
  {

  }

}
