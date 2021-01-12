import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
  }

  public num1:number;
  public num2:number;
  public res:number;

  somme(){
    this.res=this.num1+this.num2;
  }

  soustraction(){
    this.res=this.num1-this.num2;
  }
  
  multiplication(){
    this.res=this.num1*this.num2;
  }

  division(){
    this.res=this.num1/this.num2;
  }



}
