import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,AfterViewInit {
  ngAfterViewInit(): void {
   
   // console.log(this.child)
   this.child.map(x=>console.log(x))
  }

  ngOnInit(): void {
    console.log(this.calneder)
  

 }

 loadCalender(){
  console.log(this.calneder.nativeElement.value)
  this.input.nativeElement.value = this.calneder.nativeElement.value;
 }
 
 @ViewChild('calender',{read:ElementRef,static:true}) calneder!:ElementRef;
 @ViewChild('input',{read:ElementRef,static:true}) input!:ElementRef;

 @ViewChildren(ChildComponent) child!:QueryList<ChildComponent>;

add(){
  // this.child.increment()
}

}


