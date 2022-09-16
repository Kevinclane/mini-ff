import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-encounter-console',
  templateUrl: './encounter-console.component.html',
  styleUrls: ['./encounter-console.component.css']
})
export class EncounterConsoleComponent implements OnInit {

  @Input() logs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
