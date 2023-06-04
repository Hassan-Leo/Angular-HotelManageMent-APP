import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../_interfaces/loginModel.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserReadDTO } from 'src/app/_interfaces/userRead.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean | undefined;
  credentials: LoginModel = {username:'', password:''};
  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    
  }
  login = (form: NgForm) => {
    if (form.valid) {
      this.http.post<UserReadDTO>("https://localhost:5001/api/auth/login", this.credentials, {
        headers: new HttpHeaders({ "Content-Type": "application/json"})
      })
      .subscribe({
        next: (response: UserReadDTO) => {
          //localStorage.setItem("userData", JSON.stringify(response));
          localStorage.setItem("isLogedIn", 'true');
          this.invalidLogin = false;
          if (response.role == "Customer"){
            localStorage.setItem("isAdmin", 'false');
          }
          else{
            localStorage.setItem("isAdmin", 'true');
          }
          this.router.navigate(["/booking"]);
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      });
    }
  }
}
