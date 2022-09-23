import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    public showLoadingIndicator(): void {
        Swal.fire({
            width: 300,
            allowEscapeKey: false,
            allowOutsideClick: false,
            text: 'Cargando...',
            background: '#f6f6fa',
            customClass: {
                loader: 'black-loader'
            }
        });
        Swal.showLoading();
    }

    public closeLoadingIndicator(): void {
        Swal.close();
    }
}
    