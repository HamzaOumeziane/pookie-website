import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  // Vous pouvez définir ici le message à afficher ou le rendre dynamique.
  displayMessage: string = "Happy Valentine's Day! I love you so much!";

  // Vous pouvez ajouter d'autres fonctionnalités, par exemple un formulaire pour écrire un message.
}
