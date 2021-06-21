import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  title: String = 'Task List';
 showAddTask: boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiService:UiService) {
    this.subscription=this.uiService
    .OnToggle().subscribe((value)=>(this.showAddTask=value)); 
  }
  
    ngOnInit(): void {//life cycle method 
  }

  toggleAddTask() {// console.log("toggle"); 
   this.uiService.toggleAddTask();
  }
}


