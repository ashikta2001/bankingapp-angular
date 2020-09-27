import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  depositForm = this.fb.group(
    {
      dpacno:['',[Validators.required, Validators.minLength(4), Validators.pattern("^[0-9]*$")]],
      dppin:['',[Validators.required]],
      dpamt:['',[Validators.required]],
    }
  )
  
  withdrawForm = this.fb.group(
      {
        wacno:['',[Validators.required, Validators.minLength(4), Validators.pattern("^[0-9]*$")]],
        wpin:['',[Validators.required]],
        wamt:['',[Validators.required]],
      }
  )
  name="";
  constructor(private router:Router, 
    private dataService:DataService,
    private fb:FormBuilder) { 

      this.name= localStorage.getItem("name")
    }

  ngOnInit(): void {
  }

  getErrordep(errfield){
    return (this.depositForm.get(errfield).dirty || this.depositForm.get(errfield).touched) && this.depositForm.get(errfield).errors
  }

  getErrorwid(errfield){
    return (this.withdrawForm.get(errfield).dirty || this.withdrawForm.get(errfield).touched) && this.withdrawForm.get(errfield).errors
  }

  deposit(){
    if (this.depositForm.valid) {
      const result=this.dataService.deposit(this.depositForm.value.dpacno, 
        this.depositForm.value.dppin, 
        this.depositForm.value.dpamt);
      // alert(result)
      if (result.status == true){
        alert(result.message + result.balance)
      }
      else{
        alert(result.message)
      }
    }
    else{
      alert("Incorrect Account Details")
    }
  }

  withdraw(){
    if (this.withdrawForm.valid) {
      const result=this.dataService.withdraw(this.withdrawForm.value.wacno, this.withdrawForm.value.wpin, this.withdrawForm.value.wamt);
      // alert(result)
      if (result.status == true){
        alert(result.message + result.balance)
      }
      else{
        alert(result.message + result.balance)
      }
    }
    else{
      alert("Incorrect Account Details")
    }

  }    

}


  