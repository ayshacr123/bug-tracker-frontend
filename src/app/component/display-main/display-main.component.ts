import { Component, Input } from '@angular/core';
import { Project } from 'src/project';

@Component({
  selector: 'app-display-main',
  templateUrl: './display-main.component.html',
  styleUrls: ['./display-main.component.css']
})
export class DisplayMainComponent {

  // @Input() card: any;
  @Input() project: Project; 
  id: any;
  router: any;

  
constructor() {
  this.project = {
    projectId: 0,
    projectName: '',
    manager: '',
    description: ''
  };

//   navigateToNextPage() ;
//     this.router.navigate(['/bug', this.id]);
//   }
// }


// function navigateToNextPage() {
//   throw new Error('Function not implemented.');
// }

}
}