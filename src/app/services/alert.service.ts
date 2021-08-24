import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}
  alertMessage({ message, icon }) {
    Swal.fire({
      position: 'top-end',
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: 2500,
    });
  }
}
