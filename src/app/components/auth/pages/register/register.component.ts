import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { register_user } from '@app/models/user.models';
import { TokenService } from '@app/services/token.service';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private tokenService: TokenService,
    private dialogRef: MatDialogRef<RegisterComponent>,
    private router: Router
  ) {
    this.register = this.fb.group({
      Name: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      UserName: ['', Validators.required],
      PhoneNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  registerUser(){
    const user: register_user = {
      name: this.register.get('Name')?.value,
      lastname: this.register.get('LastName')?.value,
      email: this.register.get('Email')?.value,
      password: this.register.get('Password')?.value,
      username: this.register.get('UserName')?.value
    }
    this.userService.register(user).subscribe(data => {
      this.tokenService.setLocalStorage(data.token);
      this.dialogRef.close();
    }, error =>{
      console.log(error);
      this.register.reset();
    });
  }

  offRegister(): void {
    this.dialogRef.close();
  }
}
