// all neccessary information about user
import { Injectable } from '@angular/core';
import { AngularFireDatabase ,AngularFireObject} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }
   
  save(user : firebase.User){
    if(!user) return;

    this.db.object('/users/'+ user.uid).update({
      name:user.displayName,
      email:user.email
    }); 
  }

  get(uid : string):AngularFireObject<AppUser>{
    
    return this.db.object('/users/' + uid);
  }
}
