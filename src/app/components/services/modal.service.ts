import { Injectable } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { LoginComponent } from '../login/login/login.component';
import { RegisterComponent } from '../register/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private simpleModalService: SimpleModalService) { }

  
  openSignUpModal(): void {
    this.simpleModalService.addModal(RegisterComponent)
    .subscribe((isConfirmed) => {
      //We get modal result
      if (isConfirmed) {
        console.log('accepted');
      }
      else {
        console.log('declined');
      }
    });
  }

  openLogInModal(): void {
    this.simpleModalService.addModal(LoginComponent)
    .subscribe((isConfirmed) => {
      //We get modal result
      if (isConfirmed) {
        console.log('accepted');
      }
      else {
        console.log('declined');
      }
    });
  }

  closeModal():void{
    this.simpleModalService.removeAll()
  }
}
