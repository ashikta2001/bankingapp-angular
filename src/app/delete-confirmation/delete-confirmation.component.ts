import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  @Input() id:string; 
  @Input() amount:string; 
  @Input() txnType:string;


  constructor() { }

  ngOnInit(): void {
  }

}
