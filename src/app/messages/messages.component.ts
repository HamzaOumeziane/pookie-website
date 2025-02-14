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
  displayMessage: string = `❤️ Dear my love,

💖 Depuis le premier jour où nos regards se sont croisés (B2 exactly), j'ai su que ma vie ne serait plus jamais la même.
  
💕 Chaque jour passé à tes côtés est une merveilleuse aventure et expérience que j'ai hâte à dire à nos enfants.
  
😍 Ton sourire, ta douceur, ta voix, ton comportement... me rendent si heureux et si honoré.
  
💝 Tu es ma lumière et ma source de motivation. Sans toi, je ne peux pas imaginer un avenir aussi parfait.
  
🌹 Je me rappelle encore avec plein d'amour nos premiers moments ensemble, la première fois qu'on a hug, kiss, be close. Ça me rend tellement heureux.
  
💘 Tu as su, par ta présence, transformer les plus petits moments en moments inoubliables, on a même des moments dans le METRO !! J'adore les aventures avec toi mon petit coeur.
  
💓 Aujourd'hui, en cette journée dédiée à l'amour, je veux te promettre que my love for you won't stop from growing.
  
💞 Je rêve d'un futur où on sera un pour construire un monde rempli de tendresse, d'amour et d'affection. Car tu es mon amour, et tu es mon tout.
  
💗 Avec toi, mon monde deviendra parfait, rempli de roses et de pookie.
  
💟 Je te remercie pour la confiance, le soutien et l'amour que tu m'offres. Je te jure I am so lucky for having you. Tu es la meilleure. 
  Tu as su faire naître en moi des sentiments si profonds que je ne peux pas m'exprimer avec les mots, donc j'utilise toute forme d'amour hors des mots.

💘 Je l'ai dis plusieurs fois et je le redis.. Tu as rendu le petit Hamza de 8 ans:)
  
💞 Pour ce Saint-Valentin, je veux que tu saches combien tu es précieuse à mes yeux et how much i love you so so so so much that you cant even imagine. 
You can't know how much I want you as my wife and as my follower in this life (NOT FOLLOWER FAN BUT MON ACCOMPAGNATEUR).
  
❤️ Joyeuse Saint-Valentin, mon amour, mon ange, mon coeur, mon trésor. J'espère que cette journée reflette l'amour que je ressens pour toi, 
  un amour qui grandit chaque jour, plus fort et plus beau que jamais.
  
💕 Avec toute ma passion et ma tendresse, Je serai à tes côtés à chaque moment de la journée. 

  Love you.  
  Hamza Oumeziane. 
  Your Pookie Boyfriend.`;

  // Vous pouvez ajouter d'autres fonctionnalités, par exemple un formulaire pour écrire un message.
}
