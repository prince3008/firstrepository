import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import axios from 'axios';
import {Router} from '@angular/router';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  donateMe(){
    axios({
      method: "post",
      url: "http://localhost:8000/addDonate",
      data:{
        name : $("#name").val(),    
        email : $("#email").val(),
        phone : $("#phone").val(),
        bgo : $("#bgo").val(),
        city : $("#city").val(),
        date: $("#date").val(),
        sug: $("#sug").val()
      }
    });
    window.location.href = "../home";
  };

}
