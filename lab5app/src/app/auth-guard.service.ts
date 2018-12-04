import { Injectable } from '@angular/core';

import { Router } from '@angular/router';//https://angular.io/api/router/CanActivate
import 'rxjs/add/operator/map';
//import { CanActivate } from '@angular/core'; 

// @Injectable({
//   providedIn: 'root'
// })// Interface that a class can implement to be a guard deciding if a route can be activated. 
// export class AuthGuardService implement CanActivate {

//   constructor(private auth: BsNavbarComponent , private router:Router) {}
    
//     canActivate(){// need to return bool
//       return this.current_user.map(user =>{
//         if(user)  return true;
        
//         this.router.navigate(['/login']);// send back to the login page if user is not subscribed
//           return false;
//       });
//     }
// }
