import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key        : new FormControl(null),
    code        : new FormControl('', Validators.required),
    name        : new FormControl('', Validators.required),
    brand       : new FormControl('', Validators.required),
    description : new FormControl(''),
    price       : new FormControl('', Validators.required),
    image       : new FormControl(''),
    quantity    : new FormControl('', Validators.required),
  });
}
