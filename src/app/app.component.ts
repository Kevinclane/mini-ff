import { Component } from '@angular/core';
import { InitializationController } from './psudoServer/controllers/initializationController';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _initializationController: InitializationController) {
    _initializationController.initializeDB();
  }
  title = 'mini-ff';
}
