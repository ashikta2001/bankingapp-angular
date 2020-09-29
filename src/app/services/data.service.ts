import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const options = {
  withCredentials: true
}


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

  currentUser;

  constructor( private http:HttpClient) { 
    this.getDetails();
  }

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
    // return this.accountDetails[this.currentUser.acno].transactions;
    return this.http.get("http://localhost:3001/transactions",options)
  }

  delTransaction(id){
    return this.http.delete("http://localhost:3001/transactions/"+id,options)
  }

  register(name, acno, acpin, pwd){
    // not required as we will do it thru API
    // if(acno in this.accountDetails){
    //   alert("Account already exists, Please login!!!")
    //   return false;
    // }
    const data = {
      name, 
      acno, 
      acpin, 
      pwd,
      balance:0,
      transactions:[],
    }
    return this.http.post("http://localhost:3001/register", data);
    this.saveDetails();
    // console.log("after",this.accountDetails)
  }

  login(acno1, pwd){
    var acno = parseInt(acno1)
    // var data=this.accountDetails;
    const data={
      acno,
      pwd
    }
    return this.http.post("http://localhost:3001/login",data, options);
    this.saveDetails();
    // if (acno in data){
    //     var password = data[acno].password
    //     if (pwd==password){
    //       this.currentUser=data[acno]  
    //       this.saveDetails();
    //       return true
    //     }
    //     else{
    //         return false
    //     }
    // }
    // else{
    //     alert("Account No does not exists")
    //     return false
    // }
  }

  deposit(dpacno, dppin, dpamt1){
    const data={
      dpacno,
      dppin,
      dpamt1
    }

    return this.http.post("http://localhost:3001/deposit",data, options)
    this.saveDetails();
  }

  withdraw(wacno, wpin, wamt1){
    const data = {
      wacno,
      wpin,
      wamt1
    }

    return this.http.post("http://localhost:3001/withdraw",data, options)
    
  }
}
