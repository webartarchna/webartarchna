import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  userid: any;
  pass: any;

  constructor(private user: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    const res: any = await this.user.login({ userid: this.userid, pass: this.pass })
    alert(res.message)
    if (res.success) {
      this.user.setJwt(res.data)
      window.location.href = "/dashboard"
    }

  }


}
