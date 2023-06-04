import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserRegistrationDTO } from './../../_interfaces/userRegistration.model';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName : new FormControl('', [Validators.required, Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')]),
      confirm: new FormControl('', [Validators.required]),
      address: new FormControl('')
    });
  }

  validateControl = (controlName: string = '') => {
    if (this.registerForm.get(controlName)?.invalid && this.registerForm.get(controlName)?.touched)
      return true;
  
    return false;
  }

  hasError = (controlName: string, errorName: string) => {
    const value = this.registerForm.get(controlName);
    if (value?.hasError(errorName))
      return true;
    
    return false;
  }

  checkConfirmPassword = (controlName: string) => {
    const value = this.registerForm.get(controlName)
  }

  public registerUser = (registerFormValue: any) => {
    const formValues = { ...registerFormValue };

    const user: UserRegistrationDTO = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      userName: formValues.userName,
      password: formValues.password,
      confirmPassword: formValues.confirm,
      address: formValues.address,
      phoneNumber: ''
    };

    this.authService.registerUser("api/User/registration", user)
    .subscribe({
      next: (_) => console.log("Successful registration"),
      error: (err: HttpErrorResponse) => console.log(err.error.errors)
    })
  }
}