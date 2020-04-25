import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import axios from 'axios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
  }

  loginUser(){
    axios({
      method : "post",
      url : "http://localhost:8000/checkUser",
      data : {
        email:$('#email').val(),
        pwd:$('#pwd').val()
      }
  }).then(res => {
    if(res.data){
      window.location.href = "../";
    }
    else{
      alert("Incorrect Data!");
      window.location.href = "/login";
    }
  });
  }
}
