import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acname = ""
  acno = ""
  acpin = ""
  pwd =""

  constructor(private dataService:DataService,
    private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    const result=this.dataService.register(this.acname, this.acno, this.acpin, this.pwd);
    alert(result)
    if (result){
      alert("Successfully created account, Please login!!!");
      this.router.navigateByUrl("");
    }
  }
}
