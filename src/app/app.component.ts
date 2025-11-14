import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { WelcomeModalComponent } from './components/welcome-modal/welcome-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomeModalComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'fyben';
  showWelcomeModal = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0); // 👈 Scrolls to top whenever route changes
      });
  }

  ngOnInit() {
    // Check if user has seen the welcome modal before
    const hasSeenModal = localStorage.getItem('welcomeModalSeen');
    console.log('welcomeModalSeen:', hasSeenModal);
    
    // TEMPORARY: Always show modal for testing
    // this.showWelcomeModal = true;
    
    // UNCOMMENT THIS AFTER TESTING:
    if (!hasSeenModal) {
      this.showWelcomeModal = true;
      console.log('Showing welcome modal');
    } else {
      console.log('Welcome modal already seen - skipping');
    }
  }
}
