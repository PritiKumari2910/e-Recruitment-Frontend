import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username,password)
  {
    console.log('before',this.isUserLoggedIn());
    if(username === "kumprit" && password ==="pass")
    {
      sessionStorage.setItem('authenticatedUser',username)
      console.log('after',this.isUserLoggedIn());
      return true;
    }
    return false;
  }


  //We had setted the session with user name in Login form whivh we are getting here to verify if still session isfo is there & user is logged in or not
  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout()
  {
    sessionStorage.removeItem('authenticatedUser')
  }

}
