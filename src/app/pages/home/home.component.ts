import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

declare var gtag: Function;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  
  constructor(private auth: AuthService,private router: Router) {}
  categories = [
     { name: 'Food', dataKey: 'Food', image: 'https://i.ibb.co/RkB02BgH/f.png', availableText: '2 vendor Available', status: 'open' },
     { name: 'Travel', dataKey: 'Travel', image: 'https://i.ibb.co/NdT3tNxw/ttt.jpg', availableText: '1 vendor Available', status: 'open' },
       { name: 'Interiors', dataKey: 'Interiors', image: 'https://i.ibb.co/fdJVCzNq/hh.jpg', availableText: '1 vendor Available', status: 'open' },
  { name: 'Sweets', dataKey: 'Sweets', image: 'https://i.ibb.co/WNbGp7M3/sw.png', availableText: '1 vendor Available', status: 'open' },
  { name: 'Used Vehicles', dataKey: 'UsedVehicles', image: 'https://i.ibb.co/Qj6rSnqx/cd.png', availableText: 'no vendors', status: 'closed' },
   { name: 'Stitching', dataKey: 'Stitching', image: 'https://i.ibb.co/vxjv7yj9/s.png', availableText: 'no vendors', status: 'closed' },
  { name: 'Pickles', dataKey: 'Pickels', image: 'https://i.ibb.co/qTwF4jn/pp.jpg', availableText: '1 vendor Available', status: 'open' },
{ name: 'Snacks', dataKey: 'Snaks', image: 'https://i.ibb.co/jkn9KvcL/snaks.png', availableText: '1 vendor Available', status: 'open' },
  { name: 'Rentals', dataKey: 'Rentals', image: 'https://i.ibb.co/27FDzjR1/h.png', availableText: '1 vendor Available', status: 'open' },
  { name: 'Education', dataKey: 'Education', image: 'https://i.ibb.co/QFrmZyF4/e.png', availableText: 'no vendors', status: 'closed' },
  { name: 'Nuts and Oils', dataKey: 'Organic', image: 'https://i.ibb.co/ycGCcvC2/organic-sticker-label-badge-logo-black-white-ecology-icon-495897-272.jpg', availableText: '1 vendor Available', status: 'open' },
    { name: 'Bakery', dataKey: 'Bakery', image: 'https://i.ibb.co/6RJwhHgv/bakery.jpg', availableText: '1 vendor Available', status: 'open' },
    { name: 'Insurance', dataKey: 'Insurance', image: 'https://i.ibb.co/L4SS6r0/insurance.jpg', availableText: '1 vendor Available', status: 'open' },
    { name: 'Medical', dataKey: 'Medical', image: 'https://i.ibb.co/whkc6CTy/medical.webp', availableText: 'No vendor Available', status: 'closed' },
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
}
