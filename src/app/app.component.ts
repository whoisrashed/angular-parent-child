import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
 
 

  
  @ViewChild('iframe',{static:false}) iframe!:ElementRef;
  ngAfterViewInit(): void {
    console.log(this.iframe)
  }
 

}


