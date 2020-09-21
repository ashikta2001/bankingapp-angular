import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails={
    1001:{name:"user1", acno:1001, pin:1234, password:'userone', balance:3000, transactions:[]},
    1002:{name:"user2", acno:1002, pin:2345, password:'usertwo', balance:2500, transactions:[]},
    1003:{name:"user3", acno:1003, pin:3456, password:'userthree', balance:3500, transactions:[]},
    1004:{name:"user4", acno:1004, pin:4567, password:'userfour', balance:4000, transactions:[]},
    1005:{name:"user5", acno:1005, pin:5678, password:'userfive', balance:5000, transactions:[]},
  }

  constructor() { 
    this.getDetails();
  }

  currentUser;

  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails));

    if (this.currentUser){
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    }
  }

  getDetails(){
    if (localStorage.getItem("accountDetails")){
      this.accountDetails= JSON.parse(localStorage.getItem("accountDetails"));
    }
    if (localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser"))
    }
  }

  getTransactions(){
    return this.accountDetails[this.currentUser.acno].transactions;
  }

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
      balance:0,
      transactions:[],
    }
    this.saveDetails();
    // console.log("after",this.accountDetails)
    return true;
  }

  login(acno1, pwd){
    var acno = parseInt(acno1)
    var data=this.accountDetails;

    if (acno in data){
        var password = data[acno].password
        if (pwd==password){
          this.currentUser=data[acno]  
          this.saveDetails();
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
            data[dpacno].transactions.push({
              amount:dpamt,
              type:"Credit",
              balance:data[dpacno].balance
            })

            // alert('account has been credited')
            // alert(data[dpacno].balance)
            // return data[dpacno].balance
            this.saveDetails();
            return{
              status:true,
              message:'Account has been credited and Current balance is ',
              balance:data[dpacno].balance
            }
        }
    }
    else{
        // return false
        return{
          status:false,
          message:'Incorrect Account Details',
          balance:data[dpacno].balance
        }

      }        

  }

  withdraw(wacno, wpin, wamt1){
    var wamt= parseInt(wamt1)
    var data= this.accountDetails;
    
    if (wacno in data){
        var mpin = data[wacno].pin
        if (wpin==mpin){
            if (data[wacno].balance < wamt){
              return {
                status :false,
                message : "Insufficient Balance, available balance is ",
                balance : data[wacno].balance
              }
            }
            else{
              data[wacno].balance-= wamt
              data[wacno].transactions.push({
                amount:wamt,
                type:"Debit",
                balance:data[wacno].balance
              })
              this.saveDetails();
              // alert('account has been debited')
              // alert(data[wacno].balance)
              // return data[wacno].balance
              return{
                status:true,
                message:'Account has been Debited and Current balance is ',
                balance:data[wacno].balance
              }
            }
        }
    }
    else{
        // alert("Incorrect Account Details")
        return {
          status : false,
          message :'Incorrect Account Details'
        }
    }        

  }  


}
