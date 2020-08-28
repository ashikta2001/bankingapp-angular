import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  // not required for template referencing
  acno = "";
  pwd = "";

  constructor(private router:Router, 
    private dataservice:DataService) { }

  ngOnInit(): void {
  }

  // with change event binding 

  // acnoChange(event){
  //   // alert("acnoChange event");
  //   console.log(event.target.value);
  //   this.acno = event.target.value;
  // }

  // pwdChange(event){
  //   // alert("pwdChange event");
  //   console.log(event.target.value);
  //   this.password = event.target.value;
  // }

  // with template referencing
  // login(acno1, pwd1){
  login(){
          // with template referencing
          // var acno=parseInt(acno1.value);
          // var password=pwd1.value
          var acno=parseInt(this.acno);
          var password=this.pwd
          // alert(acno+","+password)
          try {
              if(isNaN(acno)) throw "Invalid Account Number"
              if(acno.toString().length<2) throw "Account number must be atleast 4 characters"
          } catch (error) {
              alert(error)
          }

          var data=this.dataservice.accountDetails;

          if (acno in data){
              var pwd = data[acno].password
              if (pwd==password){
                  alert('Login Successful')
                  this.router.navigateByUrl("dashboard")
              }
              else{
                  alert('Incorrect password')
              }
          }
          else{
              alert("Account No does not exists")
          }

  }
}
