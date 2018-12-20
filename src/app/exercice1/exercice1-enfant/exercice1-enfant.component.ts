import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() compteurEvent: EventEmitter<number> = new EventEmitter<number>();
  @Input() compteurChild: number;

  constructor() { }

  ngOnInit() {
  }

  increaseCpt() {
    this.compteurEvent.emit(1);
  }

  decreaseCpt() {
  this.compteurEvent.emit(-1);
  }
}
