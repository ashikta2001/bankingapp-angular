import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  accountDetails={
    1001:{name:"user1", acno:1001, pin:1234, password:'userone', balance:3000},
    1002:{name:"user2", acno:1002, pin:2345, password:'usertwo', balance:2500},
    1003:{name:"user3", acno:1003, pin:3456, password:'userthree', balance:3500},
    1004:{name:"user4", acno:1004, pin:4567, password:'userfour', balance:4000},
    1005:{name:"user5", acno:1005, pin:5678, password:'userfive', balance:5000},
  }

  acno = "";
  password = "";

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event){
    // alert("acnoChange event");
    console.log(event.target.value);
    this.acno = event.target.value;
  }

  pwdChange(event){
    // alert("pwdChange event");
    console.log(event.target.value);
    this.password = event.target.value;
  }

  login(){
          var acno=parseInt(this.acno);
          var password=this.password
          // alert(acno+","+password)
          try {
              if(isNaN(acno)) throw "Invalid Account Number"
              if(acno.toString().length<2) throw "Account number must be atleast 4 characters"
          } catch (error) {
              alert(error)
          }

          var data=this.accountDetails;

          if (acno in data){
              var pwd = data[acno].password
              if (pwd==password){
                  alert('Login Successful')
                  window.location.href="userhome.html"
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
