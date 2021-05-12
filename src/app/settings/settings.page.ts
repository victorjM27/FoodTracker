import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import {Router} from '@angular/router';

 
//import {SettingsComponent} from '../../component/settings/settings.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  toggleActive=false;
 

  constructor( private router:Router, private storage:Storage) {
    /*this.storage.get('temaOscuro').then((result)=>{
      if(result=== true){
        document.body.setAttribute('color-theme','dark');
        this.toggleActive=true; 
      }
      else{
        document.body.setAttribute('color-theme','light');
        this.toggleActive=false;
      }
    });*/

   }

  ngOnInit() {
  }

  

  modoscuro(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
      this.storage.set('temaOscuro',true)
    }else{
      document.body.setAttribute('color-theme','light');
      this.storage.set('temaOscuro',false)
    }
  }
 
}
