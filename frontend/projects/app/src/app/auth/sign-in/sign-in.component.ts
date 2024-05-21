import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthResponse, AuthService } from 'core';

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
  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    email: ['user123@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  signIn() {
    if (this.form.invalid) return;
    const { email, password } = this.form.getRawValue();
    this.authService.signIn(email, password)
      .subscribe((res: AuthResponse) => {
        localStorage.setItem('accessToken', res.access_token); // TODO create localStorage service
      })
  }

}
