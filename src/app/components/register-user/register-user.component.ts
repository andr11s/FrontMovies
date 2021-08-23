import { Component, OnInit } from '@angular/core';
import { UserClass } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  public user = new UserClass();
  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.userService.saveUser(this.user).subscribe((response) => {
      console.log(response);
    });
  }
}
