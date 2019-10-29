import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predefinepipe',
  templateUrl: './predefinepipe.component.html',
  styleUrls: ['./predefinepipe.component.css']
})
export class PredefinepipeComponent implements OnInit {
  public myname:string='udaysuresh';
  public mynumber:number=94239;
  public mynumber2:number=4567;
  public myprie:number=10000;
  public amount:number=290;
  public mydate:Date=new Date();
  public mydate2:Date=new Date(12,12,9119);
person:object={'name':'jagath','age':'27'}
  constructor() { }

  ngOnInit() {
  }

}
