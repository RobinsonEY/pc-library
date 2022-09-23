import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NebularComponentsModule } from "../nebular.components";
import { ButtonIconComponent } from "./button-icon.component";

@NgModule({
    declarations: [
        ButtonIconComponent,
    ],
    imports: [
        NebularComponentsModule,
        CommonModule
    ],
    exports: [
        ButtonIconComponent
    ]
  })
  export class PcButtonIconModule { }
  