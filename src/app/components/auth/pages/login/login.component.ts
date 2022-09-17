import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { login_user } from '@app/models/user.models';
import { TokenService } from '@app/services/token.service';
import { UserService } from '@app/services/user.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private dialog: MatDialog,
              private fb: FormBuilder,
              private userService: UserService,
              private tokenService: TokenService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onLogin(): void{
    const user: login_user = {
      email : this.loginForm.get('email')?.value,
      password : this.loginForm.get('password')?.value
    };
    this.userService.login(user).subscribe(data => {
      this.tokenService.setLocalStorage(data.token);
      // this.router.navigate(['/home']);
    }, error =>{
      console.log(error.message);
      this.loginForm.reset();
    });
  }

  onRegister(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '33%';
    dialogConfig.height = '80%';
    dialogConfig.minWidth = '410px';
    this.dialog.open(RegisterComponent, dialogConfig);
  }
}
