import { Component, OnInit } from '@angular/core';
import { Storage} from '@ionic/storage-angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor(private router:Router, private storage:Storage) { 
   this.storage.get('slidesviewed').then((result)=>{
      if (result=== true){
        this.router.navigateByUrl('/inicial');
      }
    });
  }

   ngOnInit() {
   
  }

  viewed(){
    this.storage.set('slidesviewed', true);
    this.router.navigateByUrl('/inicial');
  }

}

