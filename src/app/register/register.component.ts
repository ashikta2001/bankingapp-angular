import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group(
    {
      acname:['',[Validators.required] ],
      acno:['', [Validators.required, Validators.minLength(4)]],
      acpin:['', [Validators.required]],
      pwd:['', [Validators.required]],
    }
  )

  constructor(private dataService:DataService,
    private router:Router,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    if (this.registerForm.valid) {
      const result=this.dataService.register(this.registerForm.value.acname, this.registerForm.value.acno, this.registerForm.value.acpin, this.registerForm.value.pwd);
      alert(result)
      if (result){
        alert("Successfully created account, Please login!!!");
        this.router.navigateByUrl("");
      }
    }
    else{
      alert("Validations Failed. Please re-enter form data")
    }
  }
}
