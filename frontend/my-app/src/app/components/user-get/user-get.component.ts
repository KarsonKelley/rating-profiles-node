import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css'],
  providers: [UserService]
})
export class UserGetComponent implements OnInit {

  constructor(public userService: UserService) { }

  userData: any;

  ngOnInit(): void { 
    this.clearForm();
  }


  clearForm(form?:NgForm){
    if(form){
      form.reset();
    }

    this.userService.selectedUser = {
      _id: '',
      firstName: '',
      lastName: '',
      pronouns: '',
      genders: '',
      email: '',
      strength: null,
      speed: null,
      stamina: null,
      rizz: null,
      swag: null,
      magic: null,
      stealth: null,
      health: null,
      kd: null,
      ratedBy: null,
      rated: null
    }
  }
  
  onSubmit(form: NgForm){
    this.userService.getUser(form.value).subscribe((res) => {
    this.clearForm(form)
    this.userData = res;
    })
    
  }
}