import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { 

    el.nativeElement.style.backgroundColor="yellow";
    
  }
   @HostListener('mouseenter') onMouseEnter (){

   }
   @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');

   }

   private highlight(color:string){
    this.el.nativeElement.style.backgroundcolor =color;
   }

}
