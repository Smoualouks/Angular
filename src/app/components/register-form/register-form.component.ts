import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  imageSrc = 'assets/images/register.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
