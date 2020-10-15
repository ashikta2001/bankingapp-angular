import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  // getting from parent to child 
  @Input() id:string; 
  @Input() amount:string; 
  @Input() txnType:string;

  // output is an event emitter
  @Output() onDelete = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.onDelete.emit(this.id)
    // alert("Deleting......")
  }
  cancel(){
    // alert("Action cancelled......")
    this.onCancel.emit(this.id)
  }
}
