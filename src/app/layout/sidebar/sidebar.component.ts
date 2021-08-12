import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  public navlist: Array<any>=[
    {
      router: 'home',
      icon: 'home',
      label: 'Home'
    },
    {
      router: 'users',
      icon: 'person',
      label: 'Usuario'
    },
    {
      router: 'shop',
      icon: 'local_offer',
      label: 'Shop'
    }, 
    {
      router: 'config.',
      icon: 'settings',
      label: 'Config.'
    }
  ]
  ngOnInit(): void {
  }

}
