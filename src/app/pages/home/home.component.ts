import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { PwaService } from '../../services/pwa.service';

declare var gtag: Function;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showInstallPrompt = false;
  isIosDevice = false;
  isChromeiOS = false;
  
  constructor(
    private auth: AuthService, 
    private router: Router,
    public pwaService: PwaService
  ) {
    this.isIosDevice = this.pwaService.isInSafari();
    this.isChromeiOS = this.pwaService.isChromeiOS();
  }
  
  categories = [
    {
      name: 'Food',
      dataKey: 'Food',
      image: 'https://i.ibb.co/RkB02BgH/f.png',
      availableText: '2 vendors Available',
      status: 'open',
    },
    {
      name: 'Travel',
      dataKey: 'Travel',
      image: 'https://i.ibb.co/NdT3tNxw/ttt.jpg',
      availableText: '1 vendor Available',
      status: 'open',
    },
    {
      name: 'Interiors',
      dataKey: 'Interiors',
      image: 'https://i.ibb.co/fdJVCzNq/hh.jpg',
      availableText: '3 vendors Available',
      status: 'open',
    },
    {
      name: 'Sweets',
      dataKey: 'Sweets',
      image: 'https://i.ibb.co/WNbGp7M3/sw.png',
      availableText: '1 Vendor Available',
      status: 'open',
    },
    {
      name: 'Used Vehicles',
      dataKey: 'UsedVehicles',
      image: 'https://i.ibb.co/Qj6rSnqx/cd.png',
      availableText: '1 Dealer Available',
      status: 'open',
    },
    {
      name: 'Stitching',
      dataKey: 'Stitching',
      image: 'https://i.ibb.co/vxjv7yj9/s.png',
      availableText: '1 vendor Available',
      status: 'open',
    },
    {
      name: 'Pickles',
      dataKey: 'Pickels',
      image: 'https://i.ibb.co/qTwF4jn/pp.jpg',
      availableText: '1 vendor Available',
      status: 'open',
    },
    {
      name: 'Snacks',
      dataKey: 'Snaks',
      image: 'https://i.ibb.co/jkn9KvcL/snaks.png',
      availableText: '1 vendor Available',
      status: 'open',
    },
    {
      name: 'Rentals or Sales',
      dataKey: 'Rentals',
      image: 'https://i.ibb.co/27FDzjR1/h.png',
      availableText: '5 vendors Available',
      status: 'open',
    },
    {
      name: 'Education',
      dataKey: 'Education',
      image: 'https://i.ibb.co/QFrmZyF4/e.png',
      availableText: 'not available',
      status: 'closed',
    },
    {
      name: 'Nuts and Oils',
      dataKey: 'Organic',
      image:
        'https://i.ibb.co/ycGCcvC2/organic-sticker-label-badge-logo-black-white-ecology-icon-495897-272.jpg',
      availableText: '2 vendors Available',
      status: 'open',
    },
    {
      name: 'Bakery',
      dataKey: 'Bakery',
      image: 'https://i.ibb.co/6RJwhHgv/bakery.jpg',
      availableText: '1 vendor Available',
      status: 'open',
    },
    {
      name: 'Insurance',
      dataKey: 'Insurance',
      image: 'https://i.ibb.co/L4SS6r0/insurance.jpg',
      availableText: '1 vendor Available',
      status: 'open',
    },
    {
      name: 'Medical',
      dataKey: 'Medical',
      image: 'https://i.ibb.co/whkc6CTy/medical.webp',
      availableText: 'Not Available',
      status: 'closed',
    },
    {
      name: 'Handlooms',
      dataKey: 'Handlooms',
      image: 'https://i.ibb.co/xSB9bTQ0/handloom.jpg',
      availableText: '1 vendor Available',
      status: 'open',
    },
    {
      name: 'Blood Donars',
      dataKey: 'Blooddonars',
      image: 'https://i.ibb.co/nNjCmt78/2871439-1.png',
      availableText: '4 Donors Available',
      status: 'open',
    },
    {
      name: 'Catering Services',
      dataKey: 'CateringServices',
      image: 'https://i.ibb.co/wh82hP0R/catering.jpg',
      availableText: '1 Service Available',
      status: 'open',
    },{
      name: 'Clothing and Fashion',
      dataKey: 'ClothingAndFashion',
      image: 'https://i.ibb.co/mFNTnt91/fashion.jpg',
      availableText: '2 Vendors Available',
      status: 'open',
    },
    {
      name: 'Gifts Corner',
      dataKey: 'GiftingCorner',
      image: 'https://i.ibb.co/TxwdG2r6/gift.jpg',
      availableText: '1 Vendor Available',
      status: 'open',
    },
    {
      name: 'Yoga & Meditation',
      dataKey: 'Meditation',
      image: 'https://i.ibb.co/LdcGzTzk/m.png',
      availableText: '1 Service Available',
      status: 'open',
    },
    {
      name: 'Real Estate',
      dataKey: 'RealEstate',
      image: 'https://i.ibb.co/39qXYx3C/real-estate.jpg',
      availableText: '1 Service Available',
      status: 'open',
    },
  ];

 


  user: any = null;
  navigateToCategory(category: any) {
    this.trackCategoryClick(category.name);
    this.router.navigate(['/category', category.dataKey]);
  }
  ngOnInit() {
    this.user = this.auth.getCurrentUser();
    if (!this.user) {
      // redirect to login if user not logged in
      // this.router.navigate(['/login']);
    }
    
    // Show install prompt if not already installed
    setTimeout(() => {
      if (!this.pwaService.isStandalone()) {
        // For Android Chrome: show if browser supports install prompt
        // For iOS Safari: show with manual instructions
        // For iOS Chrome/Firefox/Edge: don't show (they can't install PWAs)
        this.showInstallPrompt = this.pwaService.canInstall() || this.isIosDevice;
      }
    }, 2000);
  }

  async installPwa() {
    const installed = await this.pwaService.installApp();
    if (installed) {
      this.showInstallPrompt = false;
      gtag('event', 'pwa_install', {
        timestamp: new Date().toISOString(),
      });
    }
  }

  closeInstallPrompt() {
    this.showInstallPrompt = false;
  }

  openCategory(cat: string) {
    this.router.navigate(['/category', cat]);
  }

  // logout() {
  //   this.auth.logout();
  //   this.router.navigate(['/login']);
  // }

  trackCategoryClick(categoryName: string) {
    gtag('event', 'category_click', {
      category_name: categoryName,
      timestamp: new Date().toISOString(),
    });
  }
  navigateTo3rdVendor() {
    gtag('event', 'category_click', {
      category_name: `3rd Party Vendors`,
      timestamp: new Date().toISOString(),
    });
  }
}
