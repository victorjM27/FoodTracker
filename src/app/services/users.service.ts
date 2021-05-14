import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore : AngularFirestore) { }

  public obtenerLoginPorEmail(email){
    return this.firestore.collection('users', ref => ref.where('email', '==', email));
  }
}
