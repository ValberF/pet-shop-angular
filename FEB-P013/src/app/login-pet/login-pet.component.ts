import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-pet',
  templateUrl: './login-pet.component.html',
  styleUrl: './login-pet.component.scss'
})
export class LoginPetComponent implements OnInit {
  form!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      'user': new FormControl(null),
      'password': new FormControl(null),
    });
  }

  login() {
    this.authService.loginUser(this.form.value.user, this.form.value.password).subscribe({
      next: (res) => {
        console.log(res);
        alert("Logou")
        this.router.navigate(['/']);
      },
      error: () => {
        alert("E-mail ou senha inválidos!")
      }
    });
  }

  register() {
    this.authService.signupUser(this.form.value.user, this.form.value.password).subscribe({
      next: (res) => {
        console.log(res);
        alert("Usuário cadastrado!")
        this.router.navigate(['/']);
      },
      error: (erro) => {
        alert("E-mail ou senha inválidos para cadastrar!")
      }
    });
  }
}
