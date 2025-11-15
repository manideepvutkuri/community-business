import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { VendorDataService } from '../../services/vendor-data.service';

declare var gtag: Function;


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categoryName = '';
  sellers: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private vendorDataService: VendorDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryName = params.get('category') || '';
      this.sellers = this.vendorDataService.getVendorsByCategory(this.categoryName);
    });
  }

  contactSeller(user: any) {
    gtag('event', 'contact_seller', {
      event_label: 'phone_call',
      value: user.phone,
      name: this.extractName(user.name),
    });
    window.open(`tel:${user.phone}`, '_self');
  }

  openWhatsApp(user: any) {
    gtag('event', 'contact_seller_whatsapp', {
      event_label: 'whatsapp',
      value: user.phone,
      name: this.extractName(user.name),
    });
    // const msg = encodeURIComponent('Hello! I saw your shop on Fyben.');
    // window.open(`https://wa.me/91${user.phone}?text=${msg}`, '_blank');
  }
  goBack() {
    this.router.navigate(['/home']);
  }
  toggleSection(section: any) {
    section.expanded = !section.expanded;
  }
  //   toggleSection(selectedSection: any) {
  //   // Close all other sections
  //   this.sellers.forEach(seller => {
  //     seller.sections?.forEach((section: { expanded: boolean; }) => {
  //       if (section !== selectedSection) {
  //         section.expanded = false;
  //       }
  //     });
  //   });

  //   selectedSection.expanded = !selectedSection.expanded;
  // }
  openDetails(seller: any) {
    this.dialog.open(DialogContentExampleDialog, {
      data: seller,
      width: '90%',
      maxWidth: '400px',
    });
  }

  navigateToVendorDetail(seller: any, event?: Event) {
    if (event) {
      const target = event.target as HTMLElement;
      if (target.closest('.action-buttons') || target.closest('a')) {
        return;
      }
    }
    
    const vendorId = this.vendorDataService.generateVendorId(seller.name);
    gtag('event', 'open_vendor_detail', {
      // event_category: 'navigation',
      // event_label: this.categoryName,
      vendor_id: vendorId,
      vendor_name: seller.name
    });
    this.router.navigate(['/category', this.categoryName, 'vendor', vendorId]);
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
