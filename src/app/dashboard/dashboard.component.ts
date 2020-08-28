import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accountDetails={
    1001:{name:"user1", acno:1001, pin:1234, password:'userone', balance:3000},
    1002:{name:"user2", acno:1002, pin:2345, password:'usertwo', balance:2500},
    1003:{name:"user3", acno:1003, pin:3456, password:'userthree', balance:3500},
    1004:{name:"user4", acno:1004, pin:4567, password:'userfour', balance:4000},
    1005:{name:"user5", acno:1005, pin:5678, password:'userfive', balance:5000},
  }

  dpacno = "";
  dppin = "";
  dpamt = "";
  wacno = "";
  wpin =  "";
  wamt =  "";


  constructor() { }

  ngOnInit(): void {
  }

  deposit(){
    var dpacno=this.dpacno
    var dppin=this.dppin
    var dpamt=parseInt(this.dpamt)
    var data=this.accountDetails
    
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
    var data= this.accountDetails
    
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


  