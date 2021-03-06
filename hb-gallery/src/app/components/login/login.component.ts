import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AuthorizationService } from 'src/app/services/authorization.service';
import { RegisterUserComponent } from '../register-user/register-user.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private authService: AuthorizationService, 
              private location : Location,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(username: string, password: string){
    if (username && password){
      this.authService.login(username, password).subscribe((result: any) =>{
        if (result != null){
          localStorage.setItem('token', result.access_token);
          this.location.back();
        }
      });
    }
  }

  onClickRegister(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = "70%";

    let dialogRef = this.dialog.open(RegisterUserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result!=null){
        
      }
    });
  }

}
