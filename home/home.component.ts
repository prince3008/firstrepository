import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    
  }
 change(){
    $(".login").css("display","none");
    $(".logout").css("display","block");
  }
}
