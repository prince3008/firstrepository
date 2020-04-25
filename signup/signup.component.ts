import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registerMe() {
    axios({
      method: "post",
      url: "http://localhost:8000/addUser",
      data: {
        name: $("#name").val(),
        email: $("#email").val(),
        Address: $("#Address").val(),
        phone: $("#phone").val(),
        pwd: $("#pwd").val(),
        cpwd: $("#cpwd").val(),
        bgr: $("#bgr").val(),
        weight: $("#weight").val()
      }
    }).then(res => {
      console.log("Password Do not match");
      if ($("#pwd").val() == $("#cpwd").val()) {
        window.location.href = "../login";
      }
      else {
        alert("Password Do not match");
        console.log("password do not match");
      }
    });
  };
}