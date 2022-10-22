import { Component } from '@angular/core';
import { ICity } from './modules/city';
import { blocks as data } from './data/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  blocks: ICity[] = data;
}
