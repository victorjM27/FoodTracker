import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-edit-pinfo',
  templateUrl: './edit-pinfo.page.html',
  styleUrls: ['./edit-pinfo.page.scss'],
})
export class EditPinfoPage implements OnInit {

  constructor( private storage:Storage) { 
    this.storage.get('temaOscuro').then((result)=>{
      if(result=== true){
        document.body.setAttribute('color-theme','dark');
         
      }
      else{
        document.body.setAttribute('color-theme','light');
        
      }
    });
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
