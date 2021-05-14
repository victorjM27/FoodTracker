import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers:[UsersService]
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  mostrarMensajeError = false;

  constructor(private formBuilder : FormBuilder, private userService : UsersService, private router : Router, private storage : Storage) {
    
    this.loginForm = this.formBuilder.group({
      email : new FormControl ("", Validators.compose([
        Validators.required,
        Validators.email
      ])),

      password : new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ]))

    });
  }

  ngOnInit() {
  }

  iniciarSesion(loginFormValue){
    let users;
     
    this.userService.obtenerLoginPorEmail(loginFormValue.email).get().subscribe(
      (result) => {
        if(result.docs.length == 0){
          this.mostrarMensajeError = true;
        }
        else{
          result.docs.forEach(
            (doc) =>{
              users = doc.data();
              console.log(users);
              if(users.password == loginFormValue.password){
                this.storage.set('successful login', users);
                this.router.navigateByUrl('/tabs/home');
                console.log('Ok');
                console.log(users);
              }
              else{
                console.log('Invalid Password');
                this.mostrarMensajeError = true;
              }
            }
          );
        }
      }
    );
    
  }

}
