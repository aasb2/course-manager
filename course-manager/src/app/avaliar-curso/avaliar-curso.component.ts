import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-avaliar-curso',
  templateUrl: './avaliar-curso.component.html',
  styleUrls: ['./avaliar-curso.component.css']
})
export class AvaliarCursoComponent implements OnInit {

  starClassName = "star-rating-blank";
  @Input() starId: any;
  @Input() rating: any;

  @Output() leave: EventEmitter<number> = new EventEmitter();
  @Output() enter: EventEmitter<number> = new EventEmitter();
  @Output() bigClick: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    console.log(this.starId);
    console.log(this.rating);

    if (this.rating >= this.starId) {
      this.starClassName = "star-rating-filled";
    }
  }

  onenter() {
    this.enter.emit(this.starId);
  }

  onleave() {
    this.leave.emit(this.starId);
  }

  starClicked() {
    this.bigClick.emit(this.starId);
  }

}
