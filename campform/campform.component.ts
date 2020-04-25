import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import axios from 'axios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-campform',
  templateUrl: './campform.component.html',
  styleUrls: ['./campform.component.css']
})
export class CampformComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  campMe(){
    axios({
      method: "post",
      url: "http://localhost:8000/addCamp",
      data:{
        name : $("#name").val(),    
        email : $("#email").val(),
        phone : $("#phone").val(),
        dno : $("#dno").val(),
        ps : $("#ps").val(),
        date: $("#date").val(),
        comment: $("#comment").val()
      }
    });
    this.router.navigate(['home']);
  }
}
