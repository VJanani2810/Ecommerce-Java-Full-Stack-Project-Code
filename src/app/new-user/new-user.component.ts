import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../modal/modal.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit{
  progressBar = false;
  user: User = {} as User;
  login!: FormGroup;
  username: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  addUser() {
    this.progressBar = true;
    console.log(this.username)
    this.userService.addUser(this.user).subscribe(user => {
      this.user = user;
      if(user.username) //jc add  
         this.userService.saveUsername(user.username);
      window.location.replace("/")
    });
  }
}
