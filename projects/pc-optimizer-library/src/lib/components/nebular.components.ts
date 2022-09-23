import { NgModule } from "@angular/core";
import { NbAccordionModule, 
    NbActionsModule, 
    NbAutocompleteModule,
    NbButtonModule, 
    NbCardModule, 
    NbCheckboxModule, 
    NbDatepickerModule, 
    NbFormFieldModule,
    NbIconModule, 
    NbInputModule, 
    NbLayoutModule, 
    NbRadioModule,
    NbRouteTabsetModule,
    NbSelectModule, 
    NbSpinnerModule, 
    NbStepperModule, 
    NbTabsetModule, 
    NbToggleModule } from "@nebular/theme";

const NB_MODULES = [
    NbStepperModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSpinnerModule,
    NbSelectModule,
    NbToggleModule,
    NbLayoutModule,
    NbIconModule,
    NbStepperModule,
    NbDatepickerModule,
    NbCheckboxModule,
    NbAccordionModule,
    NbAutocompleteModule,
    NbActionsModule,
    NbRadioModule,
    NbFormFieldModule,
  ];

@NgModule({
    exports: [...NB_MODULES],
  })
  export class NebularComponentsModule {}
  