import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { initializeApp, provideFirebaseApp, FirebaseOptions  } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './app/app.routes';
import { provideServiceWorker } from '@angular/service-worker';



const firebaseConfig = {
  apiKey: "AIzaSyCBL61q-f3WegmR7bmLU8ITPhIH1f0hZD4",
  authDomain: "mycommunity-95e22.firebaseapp.com",
  projectId: "mycommunity-95e22",
  storageBucket: "mycommunity-95e22.appspot.com",
  messagingSenderId: "542706735567",
  appId: "1:542706735567:web:83af8bbcaf07ee079a9aba",
  measurementId: "G-JMW1HDE5NR"
};  


bootstrapApplication(AppComponent, {
  providers: [
 provideRouter(routes),
    importProvidersFrom(CommonModule,),

    // ✅ Provide Firebase services directly
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
  ]
})
  .catch((err) => console.error(err));
