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

  logOut(){
    this.storage.set('sesioniniciada',false);
    this.router.navigateByUrl('/inicial'); 
   }
}
 

