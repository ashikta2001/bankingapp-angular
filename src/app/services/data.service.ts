import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails={
    1001:{name:"user1", acno:1001, pin:1234, password:'userone', balance:3000},
    1002:{name:"user2", acno:1002, pin:2345, password:'usertwo', balance:2500},
    1003:{name:"user3", acno:1003, pin:3456, password:'userthree', balance:3500},
    1004:{name:"user4", acno:1004, pin:4567, password:'userfour', balance:4000},
    1005:{name:"user5", acno:1005, pin:5678, password:'userfive', balance:5000},
  }

  constructor() { }

  currentuser;

  register(name, acno, acpin, pwd){
    if(acno in this.accountDetails){
      alert("Account already exists, Please login!!!")
      return false;
    }
    this.accountDetails[acno] = {
      name, 
      acno, 
      pin:acpin, 
      password:pwd,
      balance:0
    }
    console.log("after",this.accountDetails)
    return true;
  }

  login(acno1, pwd){
    var acno = parseInt(acno1)
    var data=this.accountDetails;

    if (acno in data){
        var password = data[acno].password
        if (pwd==password){
          this.currentuser=data[acno]  
          return true
        }
        else{
            return false
        }
    }
    else{
        alert("Account No does not exists")
        return false
    }
  }

  deposit(dpacno, dppin, dpamt1){
    var dpamt=parseInt(dpamt1)
    var data=this.accountDetails;
    
    if (dpacno in data){
        var mpin = data[dpacno].pin
        if (dppin==mpin){
            data[dpacno].balance+= dpamt
            // alert('account has been credited')
            // alert(data[dpacno].balance)
            return data[dpacno].balance
        }
    }
    else{
        return false
    }        

  }

  withdraw(wacno, wpin, wamt1){
    var wamt= parseInt(wamt1)
    var data= this.accountDetails;
    
    if (wacno in data){
        var mpin = data[wacno].pin
        if (wpin==mpin){
            data[wacno].balance-= wamt
            // alert('account has been debited')
            // alert(data[wacno].balance)
            return data[wacno].balance
        }
    }
    else{
        // alert("Incorrect Account Details")
        return false
    }        

  }  


}
