

// import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   private users: any[] = []; // later replaced with Firestore
//   private loggedInUser: any = null;

//   register(user: { name: string; flatNo: string; phone: string }) {
//     const exists = this.users.find(u => u.phone === user.phone);
//     if (exists) {
//       return { success: false, message: 'Phone number already registered' };
//     }
//     this.users.push(user);
//     return { success: true, message: 'Registration successful' };
//   }

//   login(phone: string) {
//     const found = this.users.find(u => u.phone === phone);
//     if (found) {
//       this.loggedInUser = found;
//       return { success: true, message: 'Login successful' };
//     }
//     return { success: false, message: 'User not found. Please register first.' };
//   }

//   getCurrentUser() {
//     return this.loggedInUser;
//   }

//   logout() {
//     this.loggedInUser = null;
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
