import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuari } from '@app/components/interfaces/user.interface';
import { AuthService } from '@app/components/services/auth.service';
import { ModalService } from '@app/components/services/modal.service';
import { AlertModel } from '@app/shared/interfaces/alert.interface';
import { SimpleModalComponent } from 'ngx-simple-modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  extends SimpleModalComponent<AlertModel, null> implements AlertModel {

  title: string = '';
  message: string = '';

  signUpForm:FormGroup = this.fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  })

  signedUpUsers:Usuari[]=[];
  canClose:boolean=true;
  usuari:Usuari={
    firstName:'',
    lastName:'',
    email:'',
    password:''
  }
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private modalsService:ModalService) { 
        super();
        this.signedUpUsers=JSON.parse(localStorage.getItem('Signed up users')!) || [];

  }

  openLogInModal(){
    this.modalsService.openLogInModal();
  }


  signUp(){

    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched();
      this.canClose=false;
      return
    }

    this.canClose=true;

    this.usuari={
      firstName:this.signUpForm.controls['firstName'].value,
      lastName:this.signUpForm.controls['lastName'].value,
      email:this.signUpForm.controls['email'].value,
      password:this.signUpForm.controls['password'].value
    }

    this.signedUpUsers.push({...this.usuari});

    localStorage.setItem('Signed up users', JSON.stringify(this.signedUpUsers));

    this.authService.auth_open=true;
    
    this.router.navigate(['./starships']);

    this.signUpForm.reset();
   }

  validField(inputField:string){
    return this.signUpForm.controls[inputField].errors && this.signUpForm.controls[inputField].touched;
  }
  
}
