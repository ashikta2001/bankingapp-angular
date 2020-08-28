import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dpacno = "";
  dppin = "";
  dpamt = "";
  wacno = "";
  wpin =  "";
  wamt =  "";


  constructor(private router:Router, 
    private dataService:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    var dpacno=this.dpacno
    var dppin=this.dppin
    var dpamt=parseInt(this.dpamt)
    var data=this.dataService.accountDetails;
    
    if (dpacno in data){
        var mpin = data[dpacno].pin
        if (dppin==mpin){
            data[dpacno].balance+= dpamt
            alert('account has been credited')
            alert(data[dpacno].balance)
        }
    }
    else{
        alert("Incorrect Account Details")
    }        

  }

  withdraw(){
    var wacno=this.wacno
    var wpin=this.wpin
    var wamt= parseInt(this.wamt)
    var data= this.dataService.accountDetails;
    
    if (wacno in data){
        var mpin = data[wacno].pin
        if (wpin==mpin){
            data[wacno].balance-= wamt
            alert('account has been debited')
            alert(data[wacno].balance)
        }
    }
    else{
        alert("Incorrect Account Details")
    }        

  }    

}


  