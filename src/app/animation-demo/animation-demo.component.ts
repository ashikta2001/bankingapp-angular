import { state, trigger, transition, animate, style, animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'200px',
        backgroundColor: "red"
      })),
      state('closed',style({
        height: '50px',
        backgroundColor:"grey"
      })),
      transition('open=>closed',[
        animate('1s')
      ]),
      transition('closed=>open',[
        animate('2s')
      ])
    ])

  ]
})
export class AnimationDemoComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
