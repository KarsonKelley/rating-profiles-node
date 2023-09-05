import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-get-all',
  templateUrl: './user-get-all.component.html',
  styleUrls: ['./user-get-all.component.css'],
  providers: [UserService]
})
export class UserGetAllComponent{

  constructor(public userService: UserService){ }

  onSubmit(){
    this.userService.getAllUsers().subscribe((res) => {
      console.log(res)
    })
  }
}
