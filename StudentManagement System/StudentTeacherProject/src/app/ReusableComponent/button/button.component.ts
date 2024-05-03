import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent  {
  @Input() label: string = 'Button';
  @Input() color: string = ' ';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
