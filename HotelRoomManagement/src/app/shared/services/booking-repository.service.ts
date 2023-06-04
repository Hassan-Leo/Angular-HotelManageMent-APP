import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { UserReadDTO } from 'src/app/_interfaces/userRead.model';
import { UserRegistrationDTO, UserUpdateDTO } from 'src/app/_interfaces/userRegistration.model';

@Injectable({
  providedIn: 'root'
})
export class BookingRepositoryService {
  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  public getOwners = (route: string) => {
    return this.http.get<UserReadDTO[]>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  public createOwner = (route: string, user: UserRegistrationDTO) => {
    return this.http.post<UserReadDTO>(this.createCompleteRoute(route, this.envUrl.urlAddress), user, this.generateHeaders());
  }

  public updateOwner = (route: string, user: UserUpdateDTO) => {
    return this.http.put(this.createCompleteRoute(route, this.envUrl.urlAddress), user, this.generateHeaders());
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
  
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }
}
