import { Component, OnInit } from '@angular/core';
import{MyBoldPipe} from '../apppipe/bold-pipe';
import { ReverseStringPipe } from '../apppipe/reversebold';
@Component({
  selector: 'app-apppipe',
  templateUrl: './apppipe.component.html',
  styleUrls: ['./apppipe.component.css']
})
export class ApppipeComponent implements OnInit {
  public name:string="AddiSiva"

  constructor() { }

  ngOnInit() {
  }

}
