import { Injectable } from "@angular/core";
import { NbComponentStatus, NbToastrService } from "@nebular/theme";
import { ToastVariables } from "../utils/constants";

@Injectable({providedIn:'root'})
export class ToastService {

    constructor(private toastrService: NbToastrService){ }

    public showToast(model: ToastModel) {
        this.toastrService.show(model.description, model.title, { status:model.status, icon:ToastVariables[model.status].ICON });
    }

}

export class ToastModel {
    public status!:NbComponentStatus;
    public title!:string;
    public description!:string;
}