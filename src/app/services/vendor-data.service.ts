import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VendorDataService {
  // Helper function to generate vendor ID from name
  generateVendorId(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  // Centralized vendor data
  allData: any = {
    Food: [
      {
        name: "Zareena's Kitchen",
        status: 'open',
        owner: 'Zareena',
        flat: 'B2101',
        phone: '+918888826606',
        whatsapp:
          'https://wa.me/+918888826606?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        description:
          'Home made food without preservatives. Fresh and delicious meals every day.',
        fullMessage: `Great Day everyone! 🌞
I'm truly grateful to reach the taste buds of our lovely customers. As you all know, we always give our best to serve freshly homemade food every day with love and care. 💛

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
              { name: 'Chicken Fry', prices: ['-', '-'] },
              { name: 'Mutton Fry', prices: ['-', '-'] },
              { name: 'Prawn Fry', prices: ['-', '-'] },
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
        whatsapp:
          'https://wa.me/+919618076809?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        items: [
          { name: 'Spicy Peanut Powder (100g)', price: '₹65' },
          { name: 'Gongura Pachadi (250g)', price: '₹50' },
          { name: 'Birakaya Tomato Pachadi (200g)', price: '₹50' },
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
      {
        name: 'Yuva Interiors',
        status: 'open',
        owner: 'Sandeep',
        flat: 'A2803',
        description:
          'Modular kitchen, fall ceiling , wardrobe, interior, furnitures and all home solutions at affordable prices.',
        phone: '9949833083',
        instagram: 'https://www.instagram.com/yuva_interio__2013/',
        whatsapp:
          'https://wa.me/+919949833083?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
      },
      {
        name: 'Praveen Interiors',
        status: 'open',
        owner: 'Praveen',
        flat: 'A2108',
        description: 'End to End Interior Solution for your dream Home. ',
        phone: '9844503981',
        whatsapp:
          'https://wa.me/+919844503981?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
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
        whatsapp:
          'https://wa.me/9392562226?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        instagram: 'https://instagram.com/beonvacation',
        website: 'http://beonvacation.in/',
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
          'https://wa.me/919908284469?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
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

      {
        name: 'Happy Nuts & Seeds',
        status: 'open',
        owner: 'Bhavana Voonna',
        flat: 'C1607',
        phone: '+919494612939',
        whatsapp:
          'https://wa.me/+919494612939?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        description: `Nourish Your Day with Nature's Greatest Treats!
Fresh & Premium Dry Fruits Available Here`,
        fullMessage: `Discover the Taste of Wholesome Goodness at Candeur 40!

Indulge in our fresh, premium dry fruits & nuts — handpicked for quality, flavor, and health.

✨ Perfect for snacking, baking, or gifting.

🌿 100% Natural • No Preservatives • Packed with Energy

👉 Almonds | Palasa Cashews | Pistachios | Walnuts | Raisins | seeds & More.

Healthy Bites, Happy Life!`,
        sections: [
          {
            name: 'Seeds',
            expanded: false,
            headers: ['Kg', '500g', '250g', '200g', '100g'],
            items: [
              {
                name: 'Watermelon Seeds',
                prices: ['₹850', '₹430', '₹220', '₹180', '₹95'],
              },
              {
                name: 'Pumpkin Seeds',
                prices: ['₹550', '₹280', '₹140', '₹110', '₹60'],
              },
              {
                name: 'Sunflower Seeds',
                prices: ['₹350', '₹180', '₹100', '₹80', '₹40'],
              },
              {
                name: 'Flax seeds',
                prices: ['₹160', '₹90', '₹50', '₹40', '₹20'],
              },
            ],
          },
          {
            name: 'Dry Fruits',
            expanded: false,
            headers: ['500g', '250g', '100g'],
            items: [
              { name: 'Kismiss premium', prices: ['₹330', '₹170', '₹70'] },
              {
                name: 'Black kismiss premium',
                prices: ['₹320', '₹160', '₹70'],
              },
              { name: 'Anjeer Big', prices: ['₹670', '₹340', '-'] },
            ],
          },
          {
            name: 'Nuts',
            expanded: false,
            headers: ['Kg', '500g', '250g', '200g', '100g'],
            items: [
              {
                name: 'Almonds Regular',
                prices: ['₹920', '₹460', '₹230', '-', '-'],
              },
              {
                name: 'Almonds Big',
                prices: ['₹950', '₹475', '₹240', '-', '-'],
              },
              {
                name: 'Palasa Cashew Jumbo',
                prices: ['₹1160', '₹580', '₹290', '-', '-'],
              },
              {
                name: 'Palasa Cashew Big',
                prices: ['₹930', '₹470', '₹240', '-', '-'],
              },
              {
                name: 'Palasa Cashew Small',
                prices: ['₹900', '₹450', '₹230', '-', '-'],
              },
              {
                name: 'Palasa Cashew Split',
                prices: ['₹900', '₹450', '₹230', '-', '-'],
              },
              {
                name: 'Palasa Cashew 4 Piece',
                prices: ['₹820', '₹410', '₹210', '-', '-'],
              },
              {
                name: 'Roasted Palasa Cashew',
                prices: ['₹900', '₹450', '₹230', '-', '-'],
              },
              {
                name: 'Masala/Salted Cashew',
                prices: ['₹1000', '₹500', '₹250', '-', '-'],
              },
              {
                name: 'Cashew granules',
                prices: ['₹650', '₹330', '₹170', '-', '-'],
              },
              { name: 'Pista Salted', prices: ['-', '₹640', '₹320', '-', '-'] },
              {
                name: 'Pista Plain',
                prices: ['-', '₹1000', '₹500', '₹400', '₹200'],
              },
              {
                name: 'Walnut Jumbo',
                prices: ['-', '₹1000', '₹500', '₹400', '₹200'],
              },
            ],
          },
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
          { name: 'Cakes for all occasion' },
          { name: 'Cookies' },
          { name: 'Donuts' },
          { name: 'Pinata Cake' },
          { name: 'Snacks Box' },
          { name: 'Corporate Orders' },
        ],
      },
    ],
    Insurance: [
      {
        name: 'The New India Assurance Co. Ltd',
        status: 'open',
        owner: 'N Sri Jyothirmai',
        flat: 'B1302',
        description:
          'General Insurance - Motor, Health, Home, property, shop, office, Personal accident and all types of general insurance',
        phone: '9966535171',
        whatsapp:
          'https://wa.me/+919966535171?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',

        items: [
          { name: 'Motor Insurance' },
          { name: 'Health Insurance' },
          { name: 'Home Insurance' },
          { name: 'Property Insurance' },
          { name: 'Shop Insurance' },
          { name: 'Office Insurance' },
          { name: 'Personal Accident Insurance' },
        ],
      },
    ],
    Rentals: [
      {
        name: 'Parking Rental ',
        status: 'open',
        owner: 'Kurukuri Tharuni',
        flat: 'A1605',
        description: 'Parking is available for Rent @100rs/- per day',
        phone: '9494200690',
        whatsapp:
          'https://wa.me/9494200690?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
      },
      {
        name: 'Flat Resale - B2704',
        status: 'open',
        owner: 'Seshi Reddy',
        flat: 'B2704',
        description: `Available for Sale 2.5 BHK Flat in Candeur 40`,
        phone: '8688904637',
        whatsapp:
          'https://wa.me/918688904637?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        items: [
          { name: `1490 SFT.` },
          { name: 'East Facing, Corner Flat & Club House view' },
          {
            name: 'Fall ceiling done with ceiling lights, Rope Lights, spot lights & Strip lights.',
          },
          {
            name: 'Interiors done in all 3 Bedrooms with good storage space, sturdy units in every bedroom',
          },
          { name: 'Dressing mirror with storage in Master bedroom' },
          { name: 'Geysers fixed in two Washrooms' },
          { name: 'Pooja Room designed well with lights ' },
          { name: 'TV unit done with lights' },
          { name: 'Pooja Room designed well with lights ' },
          { name: 'Kitchen designed with good storage space and lights.' },
          { name: '2 Car parkings available in Basement2' },
          { name: '2 years maintenance paid' },
          { name: 'A/c copper pipeline done for 4 units' },
          { name: 'Price: 1.49 Cr ( slightly negotiable )' },
        ],
      },
    ],
    Handlooms: [
      {
        name: 'Adolescent Handlooms',
        status: 'open',
        owner: 'Hatakesh',
        flat: 'A1008',
        description:
          'Khadi Jamdani Sarees manufacturer from Srikakulam. Prepare full range of Khadi products like Sarees, Dupattas, Dhotis etc.',
        phone: '9866498008',
        whatsapp:
          'https://wa.me/919866498008?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        instagram: 'https://www.instagram.com/pondurukhadijamdanisarees/',
        website: '',
        items: [
          { name: 'Khadi Sarees' },
          { name: 'Khadi Dupattas' },
          { name: 'Khadi Dhotis' },
        ],
      },
    ],
    Blooddonars: [
      {
        name: 'Community Blood Donors',
        dataKey: 'Blooddonars',
        description:
          "Here's a list of community members who have generously volunteered to donate blood in times of need.",
        formLink: 'https://forms.gle/YeBcNy7epMjjFNcy6',
        items: [
          { name: 'Mahender Reddy Vutkuri (9010161680)', price: ['B +ve'] },
          { name: 'N PRASADA RAO (8977900621)', price: ['AB +ve'] },
          { name: 'Shivani Pattnaik  (8895222053)', price: ['A +ve'] },
          { name: 'Chundi Naveen babu  (9505005551)', price: ['AB -ve'] },
        ],
      },
    ],
    CateringServices: [
      {
        name: 'Madhavi Catering Services',
        status: 'open',
        owner: 'Kosuri Avinash',
        flat: 'B3502',
        description:
          'Madhavi Catering Services offers a variety of catering options for all occasions, including weddings, parties, and corporate events.',
        phone: '8790738285',
        whatsapp:
          'https://wa.me/918790738285?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        items: [
          { name: 'Veg Catering' },
          { name: 'Non-Veg Catering' },
          { name: 'Desserts' },
        ],
      },
    ],
    ClothingAndFashion: [
      {
        name: 'Prem Enterprises',
        status: 'open',
        owner: 'Kamlesh kumar',
        flat: 'B402',
        description:
          'We provide Clothing and fashion accessories at good quality.We sell below items at reasonable prices.',
        phone: '8374220766',
        whatsapp:
          'https://wa.me/918374220766?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        website: '',
        items: [
          { name: 'sarees' },
          { name: 'kurtis' },
          { name: 'bedsheets' },
          { name: 'towels' },
          { name: 'doormats' },
          { name: 'women dresses n other clothings' },
          { name: 'assecories fashion' },
        ],
      },
      {
        name: 'Ethnic Couture',
        status: 'open',
        owner: 'Deepthi',
        flat: 'A902',
        description:
          'We are specialized in clothing, Kurtis, 3 piece sets etc.,',
        phone: '7396774569',
        whatsapp:
          'https://wa.me/917396774569?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        website: '',
        instagram: 'https://www.instagram.com/Ethniccouture9/',
        items: [
          { name: 'Kurtis' },
          { name: '3 piece sets' },
          { name: '2 piece sets' },
          { name: 'mul frocks' },
        ],
      },
    ],
    UsedVehicles: [
      {
        name: 'Auto Aesthetics ',
        status: 'open',
        owner: 'Ashwin ',
        flat: 'A908',
        description:
          'Buying and selling cars at best prices.We deal with all brands of cars.',
        phone: '9989993003',
        whatsapp:
          'https://wa.me/919989993003?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
      },
    ],
    GiftingCorner: [
      {
        name: 'Milkars Gifting',
        status: 'open',
        owner: 'Priyadarshini Mily Panda ',
        flat: 'B606',
        description:
          'All type of hampers and giftings available for - wedding, birthday, return favour, anniversary, baby shower, house warming, corporate events etc.,',
        phone: '7205815898',
        whatsapp:
          'https://wa.me/917205815898?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        instagram: 'https://www.instagram.com/milkarsgifting/',
      },
    ],
    Meditation: [
      {
        name: 'Aarogya Yoga for both Men & Women',
        status: 'open',
        owner: 'Shravanthi Raghu ',
        flat: 'C1007',
        description:
          'Yoga Therapist & Ayurveda Dietician with 8+yrs exp. I do take group classes offline/online in Candeur 40 at 6AM( for men & women) & 10AM(in 2 batches from Mon-Fri ). Also one-on,one personal Therapy sessions for specific health conditions.',
        phone: '9985928227',
        // whatsapp: '8499989189',
        whatsapp:
          'https://wa.me/919985928227?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        instagram: 'https://www.instagram.com/aarogyayoga/',
        items: [
          { name: 'Yoga Group Classes' },
          { name: 'Personal Individual Therapy sessions' },
          { name: 'Consultations regarding diet, health & illnesses' },
        ],
      },
    ],
    RealEstate: [
      {
        name: 'VIBRANT PROPMART',
        status: 'open',
        owner: 'Srinivas Rao Karasu',
        flat: 'B2302',
        description: `Warm greetings from Vibrant Propmart, Miyapur, Hyderabad!

We are delighted to introduce ourselves as a professional property consultancy firm, duly approved by the Telangana State Real Estate Regulatory Authority (RERA). 

At Vibrant Propmart, we specialize in gated community villas and premium apartments, exclusively partnering with top A-grade builders in Hyderabad.

Whether you’re searching for your dream home or a smart investment opportunity, Vibrant Propmart is your trusted one-stop solution. Our experienced team provides comprehensive assistance — from project selection, negotiations, and home loans to documentation, registration, and property transfer — ensuring a seamless experience for every client.

We take pride in serving our valued customers round the clock, 24/7, 365 days a year.

Please feel free to share our details with your friends or colleagues who are exploring property options in Hyderabad.`,
        website: 'http://www.vibrantpropmart.com',
        phone: '9705401575',
        whatsapp:
          'https://wa.me/919705401575?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
      },
    ],
    Sports: [
      {
        name: 'Cricket Tournament',
        status: 'open',
        owner: 'Bharath Mankani',
        flat: 'B2508',
        description: `Friends Cricket League S-35. Starts from Nov 23rd at Gandimaisama. Below are a few Highlights. For more info contact Bharath.`,
        website: '',
        phone: '9966113747',
        whatsapp:
          'https://wa.me/919966113747?text=Hi%20I%20saw%20your%20ad%20on%20Fyben!',
        items: [
          { name: 'Sunday Pool' },
          { name: '8 Teams' },
          { name: '3 Cup Format' },
          { name: 'Live with 360 degree camera' },
          { name: 'Refreshments' },
          { name: 'MVP of the Tourney' },
          { name: 'Best Bowler of the Tourney' },
          { name: 'Best Batsman of the Tourney' },
          { name: 'Best Fielder of the Tourney' },
          { name: 'Most Sixes of the Tourney' },
          { name: 'Most Fours of the Tourney' },
        ],
      },
    ],
  };

  getVendorsByCategory(category: string): any[] {
    return this.allData[category] || [];
  }

  getVendorById(category: string, vendorId: string): any | null {
    const vendors = this.getVendorsByCategory(category);
    return (
      vendors.find((v: any) => this.generateVendorId(v.name) === vendorId) ||
      null
    );
  }
}
