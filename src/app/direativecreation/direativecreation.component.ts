import { Component, ElementRef, Renderer} from '@angular/core';

@Component({
  selector: 'app-direativecreation',
  templateUrl: './direativecreation.component.html',
  styleUrls: ['./direativecreation.component.css']
})
export class DireativecreationComponent {
  constructor(el:ElementRef,rendever:Renderer){
    rendever.setElementStyle(el.nativeElement,'color','blue');
    rendever.setElementStyle(el.nativeElement,'backgroundcolor','lightgreen');

  }

 

}
