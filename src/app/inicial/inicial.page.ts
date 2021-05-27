import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(private storage:Storage, private router:Router) { 

    /* this.storage.get('sesioniniciada').then((result)=>{
      console.log(result);
      if(result===true){
      this.router.navigateByUrl('tabs/home');
      }
      else{
        this.router.navigateByUrl('tabs/home');
      }
    }); */
  }

  ngOnInit() {
  }

  

}


