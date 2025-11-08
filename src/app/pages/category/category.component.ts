import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
// import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

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

  allData = {
    Food: [
      {
        name: "Zareena's Kitchen",
        status: 'open',
        owner: 'Zareena',
        flat: 'B2101',
        phone: '9999999999',
        whatsapp:
          'https://wa.me/9999999999?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        description:
          'Home made food without preservatives. Fresh and delicious meals every day.',
        fullMessage: `Great Day everyone! 🌞
I’m truly grateful to reach the taste buds of our lovely customers. As you all know, we always give our best to serve freshly homemade food every day with love and care. 💛

👉 Daily Orders:
We take pre-orders every day to ensure freshness.

🍛 For Lunch Orders:
Please call or message us by 9:00 AM so we can bring in fresh chicken, mutton, prawn, and other non-veg items.

🍽️ For Dinner Orders:
Please call or message us by 12:00 PM (noon) for dinner pre-orders.

📦 Sunday Special:
We prepare bulk orders every Sunday in our kitchen!

Thank you all for your continued love and support! ❤️`,
        sections: [
          {
            name: '🍲 Biryanis',
            expanded: false,
            headers: [
              'Single (250g)',
              'Mini (300g)',
              'Full (Half KG)',
              'Family Pack (1 KG)',
            ],
            items: [
              {
                name: 'Chicken Biryani',
                prices: ['₹250', '₹400', '₹800', '₹1600'],
              },
              {
                name: 'Mutton Biryani',
                prices: ['₹400', '₹800', '₹1600', '₹2500'],
              },
              {
                name: 'Prawn Biryani',
                prices: ['₹350', '₹550', '₹1100', '₹1650'],
              },
              {
                name: 'Vegetable Biryani',
                prices: ['₹190', '₹380', '₹500', '₹1200'],
              },
            ],
          },
          {
            name: '🥣 Curries',
            expanded: false,
            headers: ['Half KG', '1 KG'],
            items: [
              { name: 'Chicken Curry', prices: ['₹450', '₹750'] },
              { name: 'Mutton Curry', prices: ['₹800', '₹1500'] },
              { name: 'Prawn Curry', prices: ['₹700', '₹1500'] },
              { name: 'Chicken fry', prices: ['-', '-'] },
              { name: 'Mutton Curry', prices: ['-', '-'] },
              { name: 'Prawn Curry', prices: ['-', '-'] },
            ],
          },
          {
            name: 'Sweet Dish',
            expanded: false,
            items: [{ name: 'Sheer Khurma', prices: [] }],
          },
        ],
      },
      {
        name: 'Yuva Nilayam Foods',
        status: 'open',
        owner: 'Katreddy Vanitha',
        flat: 'B3702',
        phone: '9618076809',
        whatsapp:
          'https://wa.me/+919618076809?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        description:
          'Delicious home-made meals prepared with care and traditional taste.',

        sections: [
          {
            name: '🍚 Rice Items',
            expanded: false,
            headers: ['500g'],
            items: [
              { name: 'Plain Curd Rice With Pickle', prices: ['₹85'] },
              { name: 'Plain Rice', prices: ['₹50'] },
              { name: 'Lemon Rice', prices: ['₹75'] },
            ],
          },
          {
            name: '🥣 Curries',
            expanded: false,
            headers: ['250g'],
            items: [
              { name: 'Guthi Vankay Curry', prices: ['₹50'] },
              { name: 'Birakaya Curry', prices: ['₹50'] },
              { name: 'Birakaya Alasanda Curry', prices: ['₹60'] },
              { name: 'Birakaya Batani Curry', prices: ['₹60'] },
            ],
          },
          {
            name: 'Rotis',
            expanded: false,
            headers: ['per peice'],
            items: [
              { name: 'Jowar Roti', prices: ['₹20'] },
              { name: 'Pulka-Chapati', prices: ['₹10'] },
              { name: 'Plain Ragi Roti', prices: ['₹20'] },
              { name: 'Beetroot Pulka', prices: ['₹15'] },
            ],
          },
        ],
      },
    ],
    Sweets: [
      {
        name: 'Cravings Corner',
        status: 'open',
        owner: 'Kurukuri Tharuni',
        flat: 'A1605',
        description: 'The following items are available:',
        phone: '9494200690',
        // whatsapp: '8499989189',
        whatsapp:
          'https://wa.me/+9494200690?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        items: [
          { name: ' Mango Jelly / Bellam Mamidi Tandra' },
          { name: 'Palm Jelly / Bellam Thati Tandra' },
          { name: 'Atreyapuram Putharekulu (Jaggery with Dry Fruits)' },
          {
            name: ' Taking pre-orders for Bobbattlu and Putharekulu (bulk quantities also available).',
          },
        ],
      },
    ],
    Pickels: [
      {
        name: 'Yuva Nilayam Foods',
        status: 'open',
        owner: 'Katreddy Vanitha',
        flat: 'B3702',
        description:
          'Taste the real homemade flavour in every spoon of our pickles.',
        phone: '9618076809',
        // whatsapp: '8499989189',
        whatsapp:
          'https://wa.me/+919618076809?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        items: [
          { name: 'Spicy Peanut Powder (100g)', price: 65 },
          { name: 'Gongura Pachadi (250g)', price: 50 },
          { name: 'Birakaya Tomato Pachadi (200g)', price: 50 },
        ],
      },
    ],
    Snaks: [
      {
        name: 'Yuva Nilayam Foods',
        status: 'open',
        owner: 'Katreddy Vanitha',
        flat: 'B3702',
        description:
          'Light, crunchy, and flavorful - pure homemade goodness in every bite ',
        phone: '9618076809',
        // whatsapp: '8499989189',
        whatsapp:
          'https://wa.me/+919618076809?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        items: [
          { name: 'Dragon Fruit Milk Shake (300ml)', price: 85 },
          { name: 'Red Uggani Bajji With 2 Mirchi bajji', price: 75 },
          { name: 'Yellow Uggani Bajji With 2 Mirchi bajji', price: 75 },
        ],
      },
    ],
    Interiors: [
      {
        name: 'Karthikeya Interiors',
        status: 'open',
        owner: 'Obul Reddy',
        flat: 'B3104',
        description:
          'Transform your home with expert interior designs.From modular kitchens to elegant false ceilings — we make every space beautiful.',
        phone: '9908433111',
        whatsapp:
          'https://wa.me/+919908433111?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
      },
    ],
    Travel: [
      {
        name: 'Be On Vacation',
        status: 'open',
        owner: 'Laxman',
        flat: 'C3405',
        description:
          'We offer the best travel packages with comfortable stays and transport across the globe.',
        packages: [
          'Thailand',
          'Singapore',
          'Dubai',
          'Kerala',
          'Jammu-Kashmir',
          'Goa',
          'Srilanka',
          'Many more...',
        ],
        phone: '9392562226',
        // whatsapp: '8499989189',
        whatsapp:
          'https://wa.me/9392562226?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        instagram: 'https://instagram.com/beonvacation',
        website: 'http://beonvacation.in/',
        // items: [
        //   { name: 'Home Tuition (upto 6th Class)', price: 500 }
        // ]
      },
    ],
    Organic: [
      {
        name: 'Pure Harvest Organic Oils',
        status: 'open',
        owner: 'T.kalyani',
        flat: 'A105',
        description: 'We offer the best organic oils.Purity is our motto',
        phone: '9908284469',
        whatsapp:
          'https://wa.me/9908284469?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        instagram: '',
        website: '',
        items: [
          { name: 'Ground nut oil(1L)', price: 280 },
          { name: 'Sesame oil(1L)', price: 480 },
          { name: 'Black sesame oil(1L)', price: 300 },
          { name: 'Coconut oil(1L)', price: 400 },
          { name: 'Cashew nuts(1kg)', price: 880 },
          { name: 'Sesame seeds(1kg)', price: 300 },
        ],
      },
    ],
    Bakery: [
      {
        name: "The Baker's House",
        status: 'open',
        owner: 'Swati Y',
        flat: 'A2201',
        description:
          'Proud owner of a cloud-based bakery kitchen, I specialize in crafting fresh, delicious, and beautifully designed cakes and desserts for all occasions. From birthdays and anniversaries to corporate events and festive celebrations, we offer from simple to fully customizable cakes, bulk orders, and party packs tailored to client needs.',
        phone: '9010073040',
        whatsapp:
          'https://wa.me/+919010073040?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        instagram:
          'https://instagram.com/x.thebakershouse?utm_medium=copy_link',
          items: [
          { name: 'Cakes for all occasion',  },
          { name: 'Cookies',  },
          { name: 'Donuts',  },
          { name: 'Pinata Cake',  },
          { name: 'Snacks Box',  },
          { name: 'Corporate Orders',  },
        ],
      },
    ],
    Insurance: [
      {
        name: "The New India Assurance Co. Ltd",
        status: 'open',
        owner: 'N Sri Jyothirmai',
        flat: 'B1302',
        description:
          'General Insurance - Motor, Health, Home, property, shop, office, Personal accident and all types of general insurance',
        phone: '9966535171',
        whatsapp:
          'https://wa.me/+919966535171?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',

          items: [
          { name: 'Motor Insurance',  },
          { name: 'Health Insurance',  },
          { name: 'Home Insurance',  },
          { name: 'Property Insurance',  },
          { name: 'Shop Insurance',  },
          { name: 'Office Insurance',  },
          { name: 'Personal Accident Insurance',  },
        ],
      },
    ],
    Rentals: [
      {
        name: 'Parking Rental ',
        status: 'open',
        owner: 'Kurukuri Tharuni',
        flat: 'A1605',
        description:
          'Parking is available for Rent @100rs/- per day',
        phone: '9494200690',
        whatsapp:
          'https://wa.me/9494200690?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
      }
    ],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.categoryName = params.get('category') || '';
      this.sellers =
        this.allData[this.categoryName as keyof typeof this.allData] || [];
    });
  }

  contactSeller(phone: string) {
    window.open(`tel:${phone}`, '_self');
  }

  openWhatsApp(number: string) {
    const msg = encodeURIComponent('Hello! I saw your shop on Fyben.');
    window.open(`https://wa.me/91${number}?text=${msg}`, '_blank');
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
