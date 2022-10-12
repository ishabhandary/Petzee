import { Component, OnInit } from '@angular/core';
import { Vet } from '../../models/vet.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  vet?:Vet;

  constructor() { }

  ngOnInit(): void {
  }

}
