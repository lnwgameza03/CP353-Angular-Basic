import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw',
  templateUrl: './hw.component.html',
  styleUrls: ['./hw.component.css']
})
export class HwComponent implements OnInit {
  private name : string;
  private surname : string;
  private nickname : string;
  private gender : string;
  private age : string;


  constructor() { }
  ngOnInit() {
    this.name = "Sitthiphon"
    this.surname = "Wattnachanont"
    this.nickname = "Game"
    this.gender = "male"
    this.age = "22"
    
  }
}