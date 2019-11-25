import { Injectable } from '@angular/core';
//import importantes
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/m-user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //variable para llamar la api de user
  userUrl = 'api/user';
  constructor(private http: HttpClient) { }

  //get all para obtener datos del modelo de User
  getAll(): Observable<User[]>
  {
    return this.http.get<User[]>(this.userUrl).pipe();
  }
}
