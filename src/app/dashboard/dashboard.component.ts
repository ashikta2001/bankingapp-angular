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
      dpacno:['',[Validators.required]],
      dppin:['',[Validators.required]],
      dpamt:['',[Validators.required]],
    }
  )
  
  withdrawForm = this.fb.group(
      {
        wacno:['',[Validators.required]],
        wpin:['',[Validators.required]],
        wamt:['',[Validators.required]],
      }
  )

  constructor(private router:Router, 
    private dataService:DataService,
    private fb:FormBuilder) { }

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
      const result=this.dataService.deposit(this.depositForm.value.dpacno, this.depositForm.value.dppin, this.depositForm.value.dpamt);
      // alert(result)
      if (result != false){
        alert('Account has been Credited and Current balance is '+ result)
      }
      else{
        alert("Incorrect Account Details")
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
      if (result != false){
        alert('Account has been Debited and Current balance is '+ result)
      }
      else{
        alert("Incorrect Account Details")
      }
    }
    else{
      alert("Incorrect Account Details")
    }

  }    

}


  