import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentHeader = 'Recipes';


  onSelectHeader(selectedHeader: string) {
    this.currentHeader = selectedHeader;
  }
}
