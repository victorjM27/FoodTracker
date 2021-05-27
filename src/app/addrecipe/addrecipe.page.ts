import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Plugins, CameraResultType, CameraSource, Geolocation, Camera } from "@capacitor/core";


@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.page.html',
  styleUrls: ['./addrecipe.page.scss'],
})
export class AddrecipePage implements OnInit {

  imagenrecetanueva = "assets/fondo-inicio.png";
  foto:SafeResourceUrl;

  constructor(private sanitize: DomSanitizer) { }

  ngOnInit() {
  }


  async tomarfoto(){
    const imagen = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.foto = this.sanitize.bypassSecurityTrustResourceUrl(imagen && imagen.dataUrl);
  }

  // formSubmit() {
  //   if (!this.CrearReceta.valid) {
  //     return false;
  //   } else {
  //     this.aptService.createReceta(this.CrearReceta.value).then(res => {
  //       console.log(res)
  //       this.CrearReceta.reset();
  //       this.router.navigate(['/tabs/recetas-guardadas']);
  //     })
  //       .catch(error => console.log(error));
  //   }
  // }

}
