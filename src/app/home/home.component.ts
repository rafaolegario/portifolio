import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private profileService:ProfileService){}
  
  ProjectStatus = 'closed'
  MoreText = 'Ver Mais'
  profile?: Profile 

  ngOnInit(){
    this.profile = this.profileService.getProfile()
  }

  MoreProjects() {
    this.ProjectStatus = (this.ProjectStatus === 'open' ? 'closed': 'open')

    if(this.ProjectStatus === 'open'){
      this.MoreText = 'Ver Menos'
    } else{
      this.MoreText = 'Ver Mais'
    }
  }
}
