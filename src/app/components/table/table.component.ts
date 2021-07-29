import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders} from "@angular/common/http"
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Subscriber } from 'rxjs';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  isAdd=true;
  isEdit=false;
  allUser: any=[];
  userObj = {
    
    firstname:'',
    middlename:'',
    lastname:'',
    email:'',
    phonenumber:'',
    role:'',
    address:''
  }
  constructor( private service:UserService, private router: Router) { }

  ngOnInit(): void {
    this.getLatestUser();
  }

  addUser(value: any,myForm:NgForm){
    console.log("add user",value);
    this.service.createUser(value).subscribe((response: any)=>{
     this.getLatestUser();
    })
    myForm.reset();
  }

getLatestUser(){
  this.service.getUser().subscribe((res)=> {
    this.allUser = res;
  });
}
editUser(user: { firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  phonenumber: string;
  role: string;
  address: string; }){
  this.isEdit=true;
  this.isAdd=false;
  this.userObj=user;
}
deleteUser(user: { id: string; }){
this.service.deleteUser(user).subscribe(()=>{
  this.getLatestUser();
})
}
updateUser(myForm:NgForm){
  this.isEdit=!this.isEdit;
  this.isAdd=!this.isAdd;
  this.service.updateUser(this.userObj).subscribe(()=>{
    this.getLatestUser();
  })
  myForm.reset();
}
cancelUser(myForm:NgForm){
  myForm.reset();
}
back(){
  this.router.navigateByUrl('');
}


}
