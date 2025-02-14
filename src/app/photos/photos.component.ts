import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { PhotoService, Photo } from './photos-services/photos.service';

@Component({
  selector: 'app-photos',
  imports: [CommonModule, RouterLink, DatePipe],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  private photoService = inject(PhotoService);

  // Utilisation de toSignal pour convertir l'observable en signal (si vous utilisez Angular 16 ou ultérieur)
  photos = toSignal(this.photoService.getPhotos());

  ngOnInit(): void {
    // Vous pouvez ajouter ici une logique supplémentaire (filtrage, recherche, etc.)
  }
}
