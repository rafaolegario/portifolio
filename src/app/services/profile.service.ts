import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile{
    let profile: Profile ={
      whatsApp: 'https://api.whatsapp.com/send?phone=5516991342553&text=%20',
      email: 'rafaelbisofficel@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/rafael-olegario-8448982b3/',
      name: 'Rafael Olegario'
    }
    return profile
  }
}
