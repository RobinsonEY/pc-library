import { Component, Input } from '@angular/core';

@Component({
  selector: 'pe-button-icon',
  template: `
      <button class="pe-button-icon" nbButton [status]="status" [disabled]="disabled" size="small">
        <nb-icon [icon]="icon" [ngClass]="{'pointer-none': disabled}"></nb-icon>
    </button>`,
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent {

  @Input()
  icon: string;

  @Input()
  disabled: boolean = false;

  @Input()
  status: string = 'basic';

}
