import { Component, Input, OnInit } from '@angular/core';
import { StatPool } from '../models/implementors/statPool';
import IStatPool from '../models/interfaces/IstatPool';

@Component({
  selector: 'app-resource-bar',
  templateUrl: './resource-bar.component.html',
  styleUrls: ['./resource-bar.component.css']
})
export class ResourceBarComponent implements OnInit {

  @Input() type: string = "";
  @Input() stat: IStatPool = new StatPool();

  width() {
    let percent = (this.stat.current / this.stat.max) * 100;
    if (percent <= 0) {
      return { width: 0 }
    }
    return {
      width: percent + "%"
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

}
