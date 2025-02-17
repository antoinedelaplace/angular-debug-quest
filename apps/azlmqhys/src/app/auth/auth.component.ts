import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

type LoginForm = {
  username: FormControl<string>;
  password: FormControl<string>;
};

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  imports: [ReactiveFormsModule],
})
export class AuthComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);

  loginForm: FormGroup<LoginForm> = this.fb.nonNullable.group({
    username: ['angularisbest', Validators.required],
    password: ['angularisbest', Validators.required],
  });

  onSubmit(): void {
    this.authService.login();
  }
}
