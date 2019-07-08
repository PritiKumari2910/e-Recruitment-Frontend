import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="";
  password="";
  invalidLogin=false
  errorMessage="You have entered invalid credentials"
  
  constructor(private route : Router,
    private hardcodedauthenticationservice : HardcodedAuthenticationService) 
  {}

  ngOnInit() {
  }

  handleLogin() {

    // if(this.username === "kumprit" && this.password ==="pass")
    if(this.hardcodedauthenticationservice.authenticate(this.username,this.password))
    {
      console.log(this.username + this.password)
      console.log("Correct credentials")
      this.invalidLogin=false
      // navigate helps in navigating to other components 
      //this.route.navigate(['welcome',this.username])

      //to store the session of logged in user
      //sessionStorage.setItem('authenticatedUser',this.username);

    }
    else
    {
    //  console.log("Invalid credentials")
      this.invalidLogin=true
    }
  }

  

}
