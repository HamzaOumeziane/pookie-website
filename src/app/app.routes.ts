import { Routes } from '@angular/router';
import { ValentineComponent } from './valentine/valentine.component';
import { PhotosComponent } from './photos/photos.component';  // Votre composant pour la page photos
import { MessagesComponent } from './messages/messages.component';

export const routes: Routes = [
    { path: '', component: ValentineComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'messages', component: MessagesComponent }
];
