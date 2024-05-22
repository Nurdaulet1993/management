import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthResponse, AuthService, JwtService } from 'core';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private authService = inject(AuthService);
  private jwtService = inject(JwtService);
  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    email: ['user123@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  signIn() {
    if (this.form.invalid) return;
    const { email, password } = this.form.getRawValue();
    this.authService.signIn(email, password)
      .subscribe((res: AuthResponse) => this.jwtService.setToken(res.access_token))
  }

}
