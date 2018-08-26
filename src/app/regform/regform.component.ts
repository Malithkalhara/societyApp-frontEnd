import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service';
import { Router} from '@angular/router';
import { FormControl,FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { convertInjectableProviderToFactory } from '../../../node_modules/@angular/core/src/di/injectable';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss']
})
export class RegformComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private auth:AuthService,private fb:FormBuilder,private router:Router) {

    this.registerForm = fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    cpassword: ['', [Validators.required, Validators.minLength(8)]],
    accno: ['', Validators.required],
    members: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.auth.registerSociety(this.registerForm.value).subscribe(data=>{ 
    })

    this.registerForm.reset();
    
 }

}

