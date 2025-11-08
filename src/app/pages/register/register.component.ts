
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent {
//   name = '';
//   flatNo = '';
//   phone = '';
//   message = '';

//   constructor(private auth: AuthService, private router: Router) {}

//   register() {
//     const result = this.auth.register({ name: this.name, flatNo: this.flatNo, phone: this.phone });
//     this.message = result.message;
//     if (result.success) {
//       setTimeout(() => this.router.navigate(['/login']), 1500);
//     }
//   }
// }



import { Component } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, query, where } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name = '';
  flatNo = '';
  phone = '';
  password = '';
  error = '';

  constructor(private firestore: Firestore, private router: Router) {}

  async register() {
    if (!this.name || !this.flatNo || !this.phone || !this.password) {
      this.error = 'All fields are required';
      return;
    }

    const usersRef = collection(this.firestore, 'users');
    const q = query(usersRef, where('phone', '==', this.phone));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      this.error = 'User already exists';
      return;
    }

    await addDoc(usersRef, {
      name: this.name,
      flatNo: this.flatNo,
      phone: this.phone,
      password: this.password,
      role: 'buyer',  // default role
      createdAt: new Date()
    });

    alert('Registration successful! Please login.');
    this.router.navigate(['/login']);
  }
}
