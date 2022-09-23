import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NebularComponentsModule } from "../nebular.components";
import { GeneralModalComponent } from "./general-modal/general-modal.component";
import { InformationModalComponent } from "./information-modal/information-modal.component";

@NgModule({
    declarations: [
        GeneralModalComponent,
        InformationModalComponent
    ],
    imports: [
        NebularComponentsModule,
        CommonModule
    ],
    exports: [
        GeneralModalComponent,
        InformationModalComponent   
    ]
  })
  export class PcModalModule { }
  