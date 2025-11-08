

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   phone = '';
//   message = '';

//   constructor(private auth: AuthService, private router: Router) {}

//   login() {
//     const result = this.auth.login(this.phone);
//     this.message = result.message;
//     if (result.success) {
//       setTimeout(() => this.router.navigate(['/']), 1000);
//     }
//   }
// }




import { Component } from '@angular/core';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  phone = '';
  password = '';
  error = '';

  constructor(private firestore: Firestore, private router: Router) {}

  async login() {
    if (!this.phone || !this.password) {
      this.error = 'Please enter both fields';
      return;
    }

    const usersRef = collection(this.firestore, 'users');
    const q = query(usersRef, where('phone', '==', this.phone), where('password', '==', this.password));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      this.error = 'Invalid credentials';
      return;
    }

    const user = snapshot.docs[0].data();
    localStorage.setItem('currentUser', JSON.stringify(user));

    // alert(`Welcome ${user['name']}!`);
    this.router.navigate(['/home'])}
}
