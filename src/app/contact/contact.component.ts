import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit , AfterViewInit {

message: string ;
email: string;
nameerroe: boolean ;
nameerroemails: boolean ;
nameerromessage : boolean;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {

  }
sendbuttonclick(name,email,message){
  if (name===''){
   this.nameerroe=true;

  }
  else {
    this.nameerroe=false; 
    
  }
 if (email===''){
  this.nameerroemails=true;
 }
 else {
  this.nameerroemails=false;
 }
 if (message===''){
  this.nameerromessage=true;
 }
 else {
  this.nameerromessage=false;
 }
  console.log('bottom clicked ' +name +' Votre e-mail' );
  this.message= 'Merci '+ name + ' pour votre message';
  
  
}
}
