import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-bar',
  templateUrl: './level-bar.component.html',
  styleUrls: ['./level-bar.component.scss'],
})
export class LevelBarComponent implements OnInit {
  @Input() value!: number;
  @Input() maxValue!: number;

  numbers!: number[];

  constructor() {}

  ngOnInit(): void {
    // shundan qilinishini o'rganvol
    // https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
    this.numbers = Array.from(Array(this.maxValue).keys());
  }
}
