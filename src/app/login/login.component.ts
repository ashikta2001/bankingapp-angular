import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginForm = this.fb.group(
    {
      acno:['', [Validators.required, Validators.minLength(4), Validators.pattern("^[0-9]*$")]],
      pwd:['', [Validators.required]],
    }
  )

  // not required for template referencing

  constructor(private router:Router, 
    private dataService:DataService,
    private fb:FormBuilder) { }

  getError(errfield){
     return (this.loginForm.get(errfield).dirty || this.loginForm.get(errfield).touched) && this.loginForm.get(errfield).errors
  }

    
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
  login(){
    if (this.loginForm.valid) {
      // const result=this.dataService.login(this.loginForm.value.acno, this.loginForm.value.pwd);
      // alert(result)
      this.dataService.login(this.loginForm.value.acno, this.loginForm.value.pwd)
      .subscribe((data:any)=>{
        if (data){
          localStorage.setItem("name",data.name)
          alert("Login Successfull!!!");
          this.router.navigateByUrl("dashboard")
        }
        else{
          alert("Invalid Credentials. Please try again!!!")
        }
      },(data)=>{
          alert(data.error.message)
      })        
    }
    else{
      alert("Form is  Invalid!!")
    }          
  }
}
