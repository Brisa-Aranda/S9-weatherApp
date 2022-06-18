import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private modalsService:ModalService) { }

  ngOnInit(): void {
  }

  openSignUpModal(){
    this.modalsService.openSignUpModal();
  }

  openLogInModal(){
    this.modalsService.openLogInModal();
  }

  closeModal(){
    this.modalsService.closeModal();
  }
}
