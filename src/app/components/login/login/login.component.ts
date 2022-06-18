import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loggedUsers } from '@app/components/interfaces/user.interface';
import { AuthService } from '@app/components/services/auth.service';
import { ModalService } from '@app/components/services/modal.service';
import { AlertModel } from '@app/shared/interfaces/alert.interface';
import { SimpleModalComponent } from 'ngx-simple-modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends SimpleModalComponent<AlertModel, null> implements AlertModel {

  title: string = '';
  message: string = '';

  constructor(private router:Router,
              private authService: AuthService,
              private fb:FormBuilder,
              private modalsService:ModalService) {
    super();
  }

  confirm() {
    this.close();
  }

  openSignUpModal(){
    this.modalsService.openSignUpModal();
  }

  logInForm:FormGroup= this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })

  usuariIn: loggedUsers={
    email:'',
    password:''
  }

  needSignUp:boolean=false;
  canClose:boolean=true;

  logIn(){
     console.log('enter in login function')
    if(this.logInForm.invalid){
      this.logInForm.markAllAsTouched();
      this.canClose=false;
      return
    }
    
    this.usuariIn={
      email:this.logInForm.controls['email'].value,
      password:this.logInForm.controls['password'].value
    }

    this.authService.verificacioLogIn(this.usuariIn.email, this.usuariIn.password);

    this.needSignUp=this.authService.needSignUpServ;
    this.canClose=this.authService.resultServ;
    console.log('canClose', this.canClose)

    this.router.navigate(['./starships']);

    this.logInForm.reset();
    
  }

  validField(inputField:string){
    return this.logInForm.controls[inputField].errors && this.logInForm.controls[inputField].touched;
  }
    
  }
