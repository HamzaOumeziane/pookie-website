import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valentine',
  imports: [CommonModule],
  templateUrl: './valentine.component.html',
  styleUrl: './valentine.component.css'
})
export class ValentineComponent implements OnInit{
  heartsArray: { style: any }[] = [];

  constructor() {}

  ngOnInit() {
    this.generateHearts();
  }

  generateHearts() {
    for (let i = 0; i < 20; i++) {
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 3 + 2}s`
      };
      this.heartsArray.push({ style });
    }
  }

  showLoveMessage() {
    const sentences = ["I love you more hihi ❤️", "Sending Love ❤️! Have a great Valentine's Day!", "Liar." ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    alert(sentences[randomIndex]);
  }
}
