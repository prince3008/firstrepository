import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import axios from 'axios';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

contactMe(){
  axios({
    method: "post",
    url: "http://localhost:8000/addContact",
    data:{
      name : $("#name").val(),    
      email : $("#email").val(),
      phone : $("#phone").val(),
      query: $("#query").val()
    }
  });
  this.router.navigate(['home']);
};

}
