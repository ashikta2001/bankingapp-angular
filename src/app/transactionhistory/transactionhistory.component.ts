import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {
  transactions=[];
  name=""
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

  delete(transaction){
    this.dataService.delTransaction(transaction._id)
    .subscribe((data:any)=>{
      alert("Transaction Deleted");
      this.getTransactions();
    })
  }

}
