import { UserRegistrationDTO } from './../../_interfaces/userRegistrationDRO.model'; 
import { ResponseDTO } from './../../_interfaces/responseDTO.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }
  public registerUser = (route: string, body: UserRegistrationDTO) => {
    return this.http.post<ResponseDTO> (this.createCompleteRoute(route, this.envUrl.urlAddress), body);
  }
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}
