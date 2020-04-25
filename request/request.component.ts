import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import axios from 'axios';



@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
bgroup : any
  constructor() { }

  ngOnInit() {
  }

  requestMe(){
  axios({
    method: "post",
    url: "http://localhost:8000/reqUser",
    data: {
      name: $("#name").val(),
      mobile: $("#mobile").val(),
      bgroup: $("#bgroup").val(),
      city: $("#city").val(),
      hospital: $("#hospital").val(),
      doctor: $("#doctor").val(),
      rdate: $("#rdate").val()
    }
  });
  }
}
