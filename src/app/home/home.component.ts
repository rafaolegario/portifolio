import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';

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

  MoreProjects() {
    this.ProjectStatus = (this.ProjectStatus === 'open' ? 'closed': 'open')

    if(this.ProjectStatus === 'open'){
      this.MoreText = 'Cancelar'
    } else{
      this.MoreText = 'Ver Mais'
    }
  }
}
