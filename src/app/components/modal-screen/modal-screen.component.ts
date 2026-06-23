import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-screen',
  templateUrl: './modal-screen.component.html',
  styleUrls: ['./modal-screen.component.scss']
})
export class ModalScreenComponent {

  modal$!: Observable<any>;

  constructor(private modalService: ModalService) {
    this.modal$ = this.modalService.modal$;
  }

  close(): void {
    this.modalService.close();
  }
}