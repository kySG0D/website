import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ModalConfig {
  title: string;
  message: string;
  onClose?: () => void;
}

@Injectable({ providedIn: 'root' })
export class ModalService {

  private modalSubject = new BehaviorSubject<ModalConfig | null>(null);
  modal$ = this.modalSubject.asObservable();

  open(config: ModalConfig): void {
    this.modalSubject.next(config);
  }

  close(): void {
    const current = this.modalSubject.value;

    if (current?.onClose) {
      current.onClose();
    }

    this.modalSubject.next(null);
  }
}