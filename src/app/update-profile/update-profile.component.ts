import { Component, OnInit } from '@angular/core';
import { User } from '../modal/modal.service';
import { UserService } from '../service/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  progressBar = false;
  user: User = {} as User;
  login!: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
      this.user = user;
    })
  }

  updateUser(idUser: any) {
    this.userService.editUser(this.user, idUser).subscribe(user => {
      this.user = user;
      alert('Profile Update Successfully');
     window.location.reload();
    // this.login.reset();
    })
  }
} {

}
