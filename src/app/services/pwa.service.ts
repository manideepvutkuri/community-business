import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;
  
  constructor(private swUpdate: SwUpdate) {
    // Listen for app updates
    this.swUpdate.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe(() => {
        if (confirm('New version available. Load new version?')) {
          window.location.reload();
        }
      });

    // Capture the install prompt event
    window.addEventListener('beforeinstallprompt', (event: any) => {
      event.preventDefault();
      this.promptEvent = event;
    });
  }

  canInstall(): boolean {
    return !!this.promptEvent;
  }

  async installApp(): Promise<boolean> {
    if (!this.promptEvent) {
      return false;
    }

    this.promptEvent.prompt();
    const result = await this.promptEvent.userChoice;
    this.promptEvent = null;
    
    return result.outcome === 'accepted';
  }

  isStandalone(): boolean {
    return window.matchMedia('(display-mode: standalone)').matches ||
           (window.navigator as any).standalone === true;
  }

  isIos(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  isInSafari(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return this.isIos() && /safari/.test(userAgent) && !/crios|fxios|edgios/.test(userAgent);
  }

  isChromeiOS(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return this.isIos() && /crios/.test(userAgent);
  }

  shouldShowIOSInstallPrompt(): boolean {
    // Only show for Safari on iOS, not Chrome/Firefox/Edge on iOS
    return this.isInSafari() && !this.isStandalone();
  }

  /**
   * Check for updates manually
   */
  checkForUpdates(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate();
    }
  }
}
