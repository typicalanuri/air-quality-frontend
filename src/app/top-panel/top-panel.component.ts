import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css'],
})
export class TopPanelComponent {
  buttons: string[] = ['Home', 'Air Quality', 'Explore'];
  @Output() clickedButton = new EventEmitter<string>();

  currentButton(button: string): void{
    this.clickedButton.emit(button);
  }
}
