import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { VendorDataService } from '../../services/vendor-data.service';

@Component({
  selector: 'app-vendor-detail',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './vendor-detail.component.html',
  styleUrl: './vendor-detail.component.scss'
})
export class VendorDetailComponent implements OnInit {
  categoryName = '';
  vendorId = '';
  vendor: any = null;
  currentUrl = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private vendorDataService: VendorDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryName = params.get('category') || '';
      this.vendorId = params.get('vendorId') || '';
      
      // Get the vendor using the shared service
      this.vendor = this.vendorDataService.getVendorById(this.categoryName, this.vendorId);
      
      if (!this.vendor) {
        // If vendor not found, navigate back to category
        this.router.navigate(['/category', this.categoryName]);
      }
    });
    
    // Get current URL for sharing
    this.currentUrl = window.location.href;
  }

  goBack() {
    this.router.navigate(['/category', this.categoryName]);
  }

  toggleSection(section: any) {
    section.expanded = !section.expanded;
  }

  openDetails(vendor: any) {
    this.dialog.open(DialogContentExampleDialog, {
      data: vendor,
      width: '90%',
      maxWidth: '400px',
    });
  }

  shareVendor() {
    const shareData = {
      title: this.vendor.name,
      text: `Check out ${this.vendor.name} on Fyben!`,
      url: this.currentUrl,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => console.log('Error sharing:', err));
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(this.currentUrl).then(() => {
        alert('Link copied to clipboard!');
      });
    }
  }

  // Extract name from format "Name (Phone)"
  extractName(fullName: string): string {
    const match = fullName.match(/^(.+?)\s*\(/);
    return match ? match[1].trim() : fullName;
  }

  // Extract phone number from format "Name (Phone)"
  extractPhone(fullName: string): string {
    const match = fullName.match(/\((\d+)\)/);
    return match ? match[1] : '';
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>{{ data.name }}</h2>
    <mat-dialog-content>
      <p style="white-space: pre-line;">{{ data.fullMessage }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
})
export class DialogContentExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
