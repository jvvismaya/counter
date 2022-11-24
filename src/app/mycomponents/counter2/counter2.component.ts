import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component {

  @Input() childPosts:any[]=[];
  @Output() passedEvent = new EventEmitter();

  
}
