import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PHOTOS } from './photoList';

export interface Photo {
  id: number;
  title: string;
  picture: string;
  location: string; // Le lieu où la photo a été prise (ex: METRO, CINEMA, etc.)
  created: string;
}

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  
    getPhotos(): Observable<Photo[]> {
      return of(PHOTOS);
    }

}