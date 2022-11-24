import { Component } from '@angular/core';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css']
})
export class Counter1Component {
  post='';
  parentPosts:any=[];

  AddPosts(post:any){
    console.log(post);
    this.parentPosts.push(post)
  }
  

}
