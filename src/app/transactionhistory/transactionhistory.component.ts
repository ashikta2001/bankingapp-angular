import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {
  transactions=[];
  id = "";
  amount ="";
  txnType="";
  name="";
  constructor(private dataService:DataService,) { 
    this.getTransactions();
    this.name= localStorage.getItem("name")
  }
  getTransactions(){
    this.dataService.getTransactions()
    .subscribe((data:any)=>
    {
      this.transactions = data.transactions;
    })
  }
  ngOnInit(): void {
  }

  showConfirmationDialog(transaction){
    console.log(transaction)
    this.id=transaction._id;
    this.amount=transaction.amount;
    this.txnType=transaction.txnType;
    // this.dataService.delTransaction(transaction._id)
    // .subscribe((data:any)=>{
    //   alert(data.message);
    //   this.getTransactions();
    // })
  }

}
