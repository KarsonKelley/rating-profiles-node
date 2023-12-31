import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  url = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  createUser(user: User){
    user.strength = Math.floor(Math.random() * 10) + 1;
    user.speed = Math.floor(Math.random() * 10) + 1;
    user.stamina = Math.floor(Math.random() * 10) + 1;
    user.rizz = Math.floor(Math.random() * 10) + 1;
    user.swag = Math.floor(Math.random() * 10) + 1;
    user.stealth = Math.floor(Math.random() * 10) + 1;
    user.health = Math.floor(Math.random() * 10) + 1;
    user.magic = Math.floor(Math.random() * 10) + 1;
    user.kd = Math.round((Math.random() * 9 + 1) * 100) / 100;

    return this.http.post(this.url, user)
  }

  
  getUser(user: User){
    return this.http.get(`${this.url}/${user._id}`)
  }

  getAllUsers(){
    return this.http.get(this.url)
  }

  updateUser(user: User){
    return this.http.put(`${this.url}/${user._id}`,
     Object.fromEntries(Object.entries(user).filter(([key, value]) => value !== null && value !== "")))
  }
}
