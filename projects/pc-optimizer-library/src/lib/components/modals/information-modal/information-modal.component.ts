import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { InformationModalModel } from '../../../models/information-modal.model';

@Component({
  selector: 'pe-information-modal',
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.scss'],
})
export class InformationModalComponent{

  public model: InformationModalModel;

  constructor(public ref: NbDialogRef<InformationModalComponent>) { }

}
