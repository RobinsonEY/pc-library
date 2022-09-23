import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { GeneralModalModel } from '../../../models/general-modal.model';

@Component({
  selector: 'pe-general-modal',
  templateUrl: './general-modal.component.html',
  styleUrls: ['./general-modal.component.scss'],
})
export class GeneralModalComponent implements OnInit {

  public model: GeneralModalModel;

  constructor(public ref: NbDialogRef<GeneralModalComponent>) { }

  ngOnInit() {
    this.getImgSrc(this.model);
  }

  private getImgSrc(generalModalModel: GeneralModalModel): void {
    switch (generalModalModel.type) {
      case 'SUCCESS':
        generalModalModel.img = './assets/img/modal/icon_modal_success.svg';
        break;
      case 'ERROR':
        generalModalModel.img = './assets/img/modal/icon_modal_error.svg';
        break;
      case 'NOTICE':
        generalModalModel.img = './assets/img/modal/icon_modal_data_not_found.svg';
        break;
      case 'WARNING':
        generalModalModel.img = './assets/img/modal/icon_modal_warning.svg';
        break;
    }
  }

}
