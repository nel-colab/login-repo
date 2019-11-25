import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/m-user/user';
import { UserService } from 'src/app/service/s-user/user.service';
import { AuthenticationService } from 'src/app/service/s-authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: User = new User();
  isLogin: boolean = false;

  constructor(
    private userService: UserService,
    //private router: Router,
    private authenticationService: AuthenticationService
  ) {  }

  ngOnInit() {
  }

  setUser()
  {
    console.log('user', this.usuario);
  }

  getUser()
  {
    this.userService.getAll().subscribe(
      data=>
      {
        console.log(data);
        if( data.find(f => f.usuario === this.usuario.usuario && f.pass == this.usuario.pass))
        {
          this.isLogin = true;
        }
        else
        {
          this.isLogin = false;
        }

        console.log('No quiero ser false sr stark: ' + this.isLogin);
      }
    )
  }
}
