import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { RegisterUser } from '../../models/registerUser';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {

  registerForm = this.formBuilder.group({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  constructor(private dialogBox: MatDialogRef<RegisterUserComponent>,
              private formBuilder: FormBuilder,
              private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onClickRegister(username: string, first_name: string, last_name: string,
                  password: string, password_confirmation: string){
    if (password !== password_confirmation)
      alert("Password does not match Password confirmation.");
  }

  onClickClose(){
    this.dialogBox.close();
  }

  onSubmit(){
    if(this.registerForm.controls.username.value==='' || this.registerForm.controls.password.value==='' 
        || this.registerForm.controls.first_name.value === '' || this.registerForm.controls.last_name.value === '' 
        || this.registerForm.controls.email.value === '')
      {alert ("All fields must be completed."); return;}

    if (this.registerForm.controls.password.value !== this.registerForm.controls.password_confirmation.value)
      {alert("Password does not match password confirmation"); return;}

    let user = new RegisterUser();
    user = {
      userName: this.registerForm.controls.username.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
      firstName: this.registerForm.controls.first_name.value,
      lastName: this.registerForm.controls.last_name.value,
    }

    this.accountService.registrUser(user).subscribe((result: any) =>{
      if (result!=null){
        this.dialogBox.close(user);
      }
    });

    // Something wrong, log that
    console.warn(this.registerForm.value);
  }

}
