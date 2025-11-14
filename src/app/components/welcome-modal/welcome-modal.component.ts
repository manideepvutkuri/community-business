import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-modal.component.html',
  styleUrl: './welcome-modal.component.scss'
})
export class WelcomeModalComponent {
  @Output() closed = new EventEmitter<void>();

  closeModal() {
    // Store in localStorage that user has seen the modal
    localStorage.setItem('welcomeModalSeen', 'true');
    this.closed.emit();
  }

  dontShowAgain() {
    this.closeModal();
  }
}
