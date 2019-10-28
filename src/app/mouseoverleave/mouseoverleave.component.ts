import { Component, ElementRef, Renderer, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouseoverleave',
  templateUrl: './mouseoverleave.component.html',
  styleUrls: ['./mouseoverleave.component.css']
})
export class MouseoverleaveComponent  {

  constructor(private el:ElementRef,private renderer:Renderer) {
    renderer.setElementStyle(el.nativeElement,'bakground','green');
   }
   @HostListener('mouseover')onmouseover(){
     this.renderer.setElementStyle(this.el.nativeElement,'background','orange');
   }
@HostListener('mouseleave')onmouseleave(){
  this.renderer.setElementStyle(this.el.nativeElement,'background','blue');
} 
 
}
