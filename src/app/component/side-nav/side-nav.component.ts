import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{

  @Input() sideNavStatus: boolean =false;


  ngOnInit(): void {
    
  }
  list=[
    {
      number:'1',
      name:'Home',
      icon:'fa-solid fa-house'
    },
    {
      number:'2',
      name:'Settings',
      icon:'fa-solid fa-gear'
    },{
      number:'3',
      name:'About',
      icon:'fa-sharp fa-solid fa-address-card'
    },{
      number:'4',
      name:'Contact',
      icon:'fa-solid fa-square-phone'
    }
  ]

}
