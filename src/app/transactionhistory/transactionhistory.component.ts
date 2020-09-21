import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.component.html',
  styleUrls: ['./transactionhistory.component.css']
})
export class TransactionhistoryComponent implements OnInit {
  transactions=[];
  constructor(private dataService:DataService,) { 
    this.transactions=dataService.getTransactions();
  }

  ngOnInit(): void {
  }

}
