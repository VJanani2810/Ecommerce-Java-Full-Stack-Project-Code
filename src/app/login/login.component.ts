import { Component, OnInit } from '@angular/core';
import { User } from '../modal/modal.service';
import { UserService} from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
progressBar = false;
user:User  = {} as User;
username :string | any ;
password : string| any;

constructor(private userService: UserService, private router: Router) {

}
ngOnInit(): void {
  //throw new Error('Method not implemented.');
}
// addUser() {
//   this.progressBar = true;
//   console.log(this.username)
//   this.userService.addUser(this.user).subscribe(user => {
//     this.user = user;
//     if(user.username) //jc add  
//        this.userService.saveUsername(user.username);
//     window.location.replace("/")
//   });
// }

// addUser() {
//   this.progressBar = true;
//   console.log(this.user.username)
//   if(this.user.username==="admin@gmail.com")
//   {
//       if(this.userService.authenticate(this.username,this.password))
//       {
//         this.router.navigate(['/dashboard'])
//       }
//       else{
//         alert("Wrong Credential");
//         this.router.navigate(['/login']);
//         window.location.reload();
//       }
//   }
//   else{
//   this.userService.addUser(this.user).subscribe(user => {
//     this.user = user;
//     if(user.username) //jc add  
//        this.userService.saveUsername(user.username);
//     window.location.replace("/")
//   });
// }
// }

addUser() {
  this.progressBar = true;
  console.log(this.user.username)
  if(this.user.username==="admin@gmail.com" && this.user.password)
  {
      if(this.userService.authenticate(this.user.username,this.user.password))
      {
        //this.router.navigate(['/dashboard'])
        this.userService.saveUsername(this.user.username);
        window.location.replace("/")
      }
      else{
        alert("Wrong Credential");
        this.router.navigate(['/login']);
        window.location.reload();
      }
  }
  else{
  this.userService.addUser(this.user).subscribe(user => {
    this.user = user;
    if(user.username) //jc add  
       this.userService.saveUsername(user.username);
    window.location.replace("/")
  });
}
}

}
