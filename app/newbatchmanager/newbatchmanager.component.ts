import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newbatchmanager',
  templateUrl: './newbatchmanager.component.html',
  styleUrls: ['./newbatchmanager.component.css']
})
export class NewbatchmanagerComponent implements OnInit {
  title:string="New BatchManager Details";

  constructor() { }

  ngOnInit(): void {
  }

}
